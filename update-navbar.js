const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf-8');

// Remove villas and about from navLinks
content = content.replace(/\{ href: `\/\$\{locale\}\/\$\{PATH_SEGMENTS\.villas\[locale\]\}`\, label: messages\.villas \},\n\s*/, '');
content = content.replace(/\{ href: `\/\$\{locale\}\/about`\, label: messages\.about \},\n\s*/, '');

// Update Button
content = content.replace(/<Button variant="default">\{messages\.book\}<\/Button>/, 
  `<a href={\`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}\`} target="_blank" rel="noopener noreferrer">\n              <Button variant="default">{messages.book}</Button>\n            </a>`
);

fs.writeFileSync('src/components/layout/Navbar.tsx', content);
