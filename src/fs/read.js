import { access, constants, readFile } from "node:fs/promises";

const read = async () => {
    let isFileExists = false;

  try {
    await access("./files/fileToRead.txt", constants.R_OK | constants.W_OK);
    isFileExists = true;
  } catch {
    isFileExists = false;
  }

  if (isFileExists) {
    const filePath = new URL('./files/fileToRead.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents)
  } else {
    throw new Error("FS operation failed");
  }
};

await read();