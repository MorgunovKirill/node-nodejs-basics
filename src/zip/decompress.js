import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';

const _dirname = fileURLToPath(new URL('.', import.meta.url));
const zip_path = 'archive.gz';
const file_path = '/files/fileToCompress.txt';

const decompress = async () => {
    const inputFile = createReadStream(`${_dirname}${zip_path}`);
    const outputFile = createWriteStream(`${_dirname}${file_path}`);

    inputFile.pipe(createUnzip()).pipe(outputFile);
};

await decompress();