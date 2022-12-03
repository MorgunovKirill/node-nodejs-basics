import { access, constants, unlink } from "node:fs/promises";

const remove = async () => {
  let isFileExists = false;

  try {
    await access("./files/fileToRemove.txt", constants.R_OK | constants.W_OK);
    isFileExists = true;
  } catch {
    isFileExists = false;
  }

  if (isFileExists) {
    await unlink("./files/fileToRemove.txt");
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
