import { copyFile, mkdir, writeFile } from 'node:fs/promises';

const source = new URL('../outputs/index.html', import.meta.url);
const target = new URL('../.deploy-assets/', import.meta.url);
await mkdir(target, { recursive: true });
await writeFile(new URL('.assetsignore', target), '*\n!index.html\n');
await copyFile(source, new URL('index.html', target));
console.log('Prepared outputs/index.html for Cloudflare Workers.');
