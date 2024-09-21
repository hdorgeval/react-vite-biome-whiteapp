import * as fs from 'node:fs';
import * as path from 'node:path';

// Function to check if a file name is in kebab-case
const isKebabCase = (fileName: string) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(fileName);

// Function to recursively check all files in a directory
const checkDirectory = (dir: fs.PathLike) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir.toString(), file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkDirectory(fullPath);
    } else {
      const fileName = path.basename(file, path.extname(file));
      if (!isKebabCase(fileName)) {
        console.error(`File name "${file}" is not in kebab-case.`);
        process.exit(1);
      }
    }
  }
};

export default checkDirectory;

// Start checking from the current directory
checkDirectory('./src');

// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log('All file names are in kebab-case.');
