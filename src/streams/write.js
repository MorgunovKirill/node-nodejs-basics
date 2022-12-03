import path from 'node:path';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { stdin } from 'node:process';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);       

    stdin.on('data', (data) => {
        const stream = createWriteStream(path.resolve(__dirname, 'files/fileToWrite.txt'));
        stream.write(data, (err) => {
            if(err) {
                console.log(err);
            } 
        })
    })
};

await write();