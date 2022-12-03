import { access, constants, rename as fsRename } from "node:fs/promises";

const rename = async () => {
  let isWrongFilenameFileExists = false;
  let isProperFilenameFileExists = false;

  try {
    await access("./files/wrongFilename.txt", constants.R_OK | constants.W_OK);
    isWrongFilenameFileExists = true;
  } catch {
    isWrongFilenameFileExists = false;
  }

  try {
    await access("./files/properFilename.md", constants.R_OK | constants.W_OK);
    isProperFilenameFileExists = true;
  } catch {
    isProperFilenameFileExists = false;
  }

  if(isWrongFilenameFileExists && !isProperFilenameFileExists) {
    fsRename('./files/wrongFilename.txt', './files/properFilename.md')
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
