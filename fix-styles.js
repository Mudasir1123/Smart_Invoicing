const fs = require('fs');
const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      if (file.endsWith('.tsx')) filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

const files = walkSync('c:/Users/mudas/OneDrive/Pictures/smart-invoicing-website/Smart/app', []);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Clean out the `isDark` variables where they might be unused now
  content = content.replace(/const \[isDark, setIsDark\] = useState\(false\)/g, '');

  content = content.replace(/bg-white text-gray-900 dark:bg-gray-900 dark:text-white/g, 'bg-background text-foreground');
  content = content.replace(/bg-gray-50 dark:bg-gray-800/g, 'bg-muted/30');
  content = content.replace(/bg-gray-50 dark:bg-gray-900/g, 'bg-muted/30');
  content = content.replace(/bg-white dark:bg-gray-800/g, 'bg-card text-card-foreground');
  content = content.replace(/text-gray-600 dark:text-gray-400/g, 'text-muted-foreground');
  content = content.replace(/text-gray-700 dark:text-gray-300/g, 'text-muted-foreground');
  
  content = content.replace(/\$\{isDark \? 'bg-gray-700' : 'bg-white'\}/g, 'bg-card text-card-foreground shadow-sm border border-border');
  content = content.replace(/\$\{isDark \? 'bg-gray-800' : 'bg-white'\}/g, 'bg-card text-card-foreground shadow-sm border border-border');
  content = content.replace(/isDark \? 'bg-gray-900 text-white' : 'bg-white text-gray-900'/g, "'bg-background text-foreground'");
  content = content.replace(/isDark \? 'text-gray-500' : 'text-gray-500'/g, "'text-muted-foreground'");

  // Fix contact page specifically
  if (file.includes('contact')) {
    content = content.replace(/className=\{`rounded-lg p-8 transition-colors \$\{\n.*?isDark \? 'bg-gray-800' : 'bg-white'\n.*?\}`\}/g, 'className="rounded-lg p-8 transition-colors bg-card text-card-foreground shadow-sm border border-border"');
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
  }
});
console.log('Script completed.');
