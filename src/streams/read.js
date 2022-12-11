import path from 'node:path';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { stdout } from 'node:process';

const read = async () => {
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stream = createReadStream(path.resolve(__dirname, 'files/fileToRead.txt'));
stream.on('data', (chunk) => {
  stdout.write(chunk)
});
};

await read();