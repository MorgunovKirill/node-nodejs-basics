import { access, constants, appendFile } from "node:fs/promises";

const create = async () => { 
  let isFileExists = false;

  try {
    await access("./files/fresh.txt", constants.R_OK | constants.W_OK);
    isFileExists = true;
  } catch {
    isFileExists = false;
  }

  if (!isFileExists) {
    await appendFile("./files/fresh.txt", "I am fresh and young");
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
