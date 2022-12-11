import { copyFile, constants, access, mkdir, readdir } from "node:fs/promises";

const copy = async () => {
  let isSourceDirectoryExists = false;
  let isDestinationDirectoryExists = false;

  try {
    await access("./files_copy", constants.R_OK | constants.W_OK);
    isDestinationDirectoryExists = true;
  } catch {
    isDestinationDirectoryExists = false;
  }

  try {
    await access("./files", constants.R_OK | constants.W_OK);
    isSourceDirectoryExists = true;
  } catch {
    isSourceDirectoryExists = false;
  }

  if (isSourceDirectoryExists && !isDestinationDirectoryExists) {
    const newFolder = new URL("./files_copy", import.meta.url);
    const createDir = await mkdir(newFolder, { recursive: true });

    const files = await readdir("./files");
    for (const file of files) {
      await copyFile(`./files/${file}`, `./files_copy/${file}`);
    }
  } else {
    throw new Error("FS operation failed");
  }
};

copy();
