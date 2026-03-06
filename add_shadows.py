import os
import re

components_dir = r"components"

replacements = [
    (r'bg-white/5 rounded-\[40px\]', r'bg-white/5 rounded-[40px] shadow-2xl shadow-black/50'),
    (r'bg-brand-charcoal/40 border border-white/5((?: p-12 md:p-20| flex flex-col)?)', r'bg-brand-charcoal/40 border border-white/5\1 shadow-2xl shadow-black/50'),
    (r'bg-brand-charcoal/30 border border-white/5((?: min-h-\[600px\]| hover:border-brand-accent/30)?)', r'bg-brand-charcoal/30 border border-white/5\1 shadow-2xl shadow-black/40'),
    (r'rounded-3xl bg-white/5 border border-white/5', r'rounded-3xl bg-white/5 border border-white/5 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-brand-accent/20'),
    (r'rounded-2xl border border-white/10 bg-white/5', r'rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/40'),
    (r'aspect-video bg-white/5 rounded-\[40px\] border border-white/10', r'aspect-video bg-white/5 rounded-[40px] border border-white/10 shadow-2xl shadow-black/50'),
]

for filename in os.listdir(components_dir):
    if not filename.endswith('.tsx'):
        continue
    filepath = os.path.join(components_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    for pattern, repl in replacements:
        # Only replace if not already containing shadow
        content = re.sub(pattern + r'(?! shadow-)', repl, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")

print("Done")
