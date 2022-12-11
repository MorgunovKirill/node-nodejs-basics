import { access, constants, readFile } from "node:fs/promises";
const { createHmac } = await import('node:crypto');

const calculateHash = async () => {
    let isFileExists = false;

    try {
      await access("./files/fileToCalculateHashFor.txt", constants.R_OK | constants.W_OK);
      isFileExists = true;
    } catch {
      isFileExists = false;
    }

    if(isFileExists) {
        const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
        const contents = await readFile(filePath, { encoding: 'utf8' }); 
        const hash = createHmac('sha256', 'abcdefg')
                .update(contents)
                .digest('hex');
        console.log(hash);
    } else {
        throw new Error("FS operation failed");
    }
    
};

await calculateHash();