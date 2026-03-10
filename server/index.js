require('dotenv').config();
const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Telegram Bot Token and Admin IDs
const token = process.env.VITE_TELEGRAM_BOT_TOKEN;
// Store admin IDs as a comma-separated string in .env
const adminIdsStr = process.env.ADMIN_IDS || '';
const adminIds = adminIdsStr.split(',').map(id => id.trim()).filter(id => id);

if (!token) {
    console.error('CRITICAL: VITE_TELEGRAM_BOT_TOKEN is missing in .env');
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// Setup SQLite Database
const dbPath = path.resolve(__dirname, 'applications.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database opening error: ', err);
});

// Create table if not exists
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT,
        source TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'new'
    )`);
});

// Express route to receive form submission from the website
app.post('/api/application', (req, res) => {
    const { name, email, phone, message, source } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ error: 'Name and phone are required' });
    }

    const stmt = db.prepare('INSERT INTO applications (name, email, phone, message, source) VALUES (?, ?, ?, ?, ?)');
    stmt.run([name, email, phone, message, source], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }

        const appId = this.lastID;
        res.status(200).json({ success: true, id: appId });

        // Notify all admins via Telegram
        const messageText = `
🔥 *Нова заявка #${appId} з сайту ZEMRESURS* 🔥
Джерело: *${source}*

👤 *Ім'я:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email || 'Не вказано'}
🕒 *Дата:* ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}

📝 *Суть запиту:*
${message || 'Не вказано'}
        `;

        adminIds.forEach(adminId => {
            bot.sendMessage(adminId, messageText, { parse_mode: 'Markdown' }).catch(err => {
                console.error(`Failed to send message to admin ${adminId}:`, err.message);
            });
        });
    });
    stmt.finalize();
});

// Telegram Bot Logic
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id.toString();
    
    if (adminIds.includes(chatId)) {
        bot.sendMessage(chatId, 'Вітаю, адміністраторе! Виберіть дію:', {
            reply_markup: {
                keyboard: [
                    [{ text: '📋 Показати нові заявки' }],
                    [{ text: '🤝 Заявки: Співпраця' }, { text: '📞 Заявки: Контакти' }],
                    [{ text: '📊 Усі заявки' }]
                ],
                resize_keyboard: true
            }
        });
    } else {
        bot.sendMessage(chatId, 'У вас немає доступу.');
    }
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id.toString();
    const text = msg.text;

    // Ignore commands like /start
    if (text && text.startsWith('/')) return;

    if (!adminIds.includes(chatId)) return;

    if (text === '📋 Показати нові заявки') {
        db.all("SELECT * FROM applications WHERE status = 'new' ORDER BY id DESC LIMIT 5", (err, rows) => {
            if (err) {
                return bot.sendMessage(chatId, 'Помилка бази даних');
            }
            if (!rows || rows.length === 0) {
                return bot.sendMessage(chatId, 'Нових заявок немає.');
            }

            bot.sendMessage(chatId, `Останні ${rows.length} нових заявок:`);
            rows.forEach(row => {
                const messageText = `
*Заявка #${row.id}* (${row.source})
Ім'я: ${row.name}
Телефон: ${row.phone}
Email: ${row.email || '-'}
Дата: ${row.created_at}

${row.message || ''}
                `;
                bot.sendMessage(chatId, messageText, { parse_mode: 'Markdown' });
            });
        });
    } else if (text === '🤝 Заявки: Співпраця' || text === '📞 Заявки: Контакти') {
        const sourceFilter = text.includes('Співпраця') ? 'Cooperation' : 'Contact';
        
        db.all("SELECT * FROM applications WHERE source = ? ORDER BY id DESC LIMIT 5", [sourceFilter], (err, rows) => {
            if (err) {
                return bot.sendMessage(chatId, 'Помилка бази даних');
            }
            if (!rows || rows.length === 0) {
                return bot.sendMessage(chatId, `Заявок з категорії "${sourceFilter}" немає.`);
            }

            bot.sendMessage(chatId, `Останні ${rows.length} заявок (${sourceFilter}):`);
            rows.forEach(row => {
                const messageText = `
*Заявка #${row.id}*
Ім'я: ${row.name}
Телефон: ${row.phone}
Email: ${row.email || '-'}
Дата: ${row.created_at}

${row.message || ''}
                `;
                bot.sendMessage(chatId, messageText, { parse_mode: 'Markdown' });
            });
        });
    } else if (text === '📊 Усі заявки') {
        db.get("SELECT COUNT(*) as count FROM applications", (err, rowTotal) => {
            if (err) return bot.sendMessage(chatId, 'Помилка бази даних');
            
            db.get("SELECT COUNT(*) as count FROM applications WHERE source = 'Cooperation'", (err, rowCoop) => {
                db.get("SELECT COUNT(*) as count FROM applications WHERE source = 'Contact'", (err, rowCont) => {
                    bot.sendMessage(chatId, `Резюме по заявках:\n\nУсього в базі: *${rowTotal.count}*\nЗ них "Співпраця": *${rowCoop ? rowCoop.count : 0}*\nЗ них "Контакти": *${rowCont ? rowCont.count : 0}*`, { parse_mode: 'Markdown' });
                });
            });
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Telegram bot running`);
    console.log(`Authorized Admins: ${adminIdsStr}`);
});
