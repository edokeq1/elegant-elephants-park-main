import os
import re

components_dir = r"c:\Users\edoke\OneDrive\Рабочий стол\elegant-elephants-park-main\components"

for filename in os.listdir(components_dir):
    if not filename.endswith('.tsx') or filename in ['LazyImage.tsx', 'ImageViewer.tsx']:
        continue
    
    filepath = os.path.join(components_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Replace <img ... /> with <LazyImage ... />
    # Also handle hover effects on image cards
    if '<img' in content:
        content = re.sub(r'<img\b', r'<LazyImage', content)
        
        # Add import
        if 'LazyImage' not in original_content and '<LazyImage' in content:
            # find last import
            last_import_idx = content.rfind('import ')
            if last_import_idx != -1:
                end_of_line = content.find('\n', last_import_idx)
                content = content[:end_of_line] + "\nimport { LazyImage } from './LazyImage';" + content[end_of_line:]

    # Enhance hover effects on cards to combine brightness and scale
    # Find group-hover:scale-105 and add group-hover:brightness-110 if not present
    content = re.sub(
        r'(group-hover:scale-105(?!\s*group-hover:brightness))', 
        r'\1 group-hover:brightness-110', 
        content
    )

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")

print("Done")
