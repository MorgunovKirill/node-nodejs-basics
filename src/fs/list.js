import { constants, access, readdir } from "node:fs/promises";

const list = async () => {
  let isSourceDirectoryExists = false;
  
  try {
    await access("./files", constants.R_OK | constants.W_OK);
    isSourceDirectoryExists = true;
  } catch {
    isSourceDirectoryExists = false;
  }

  if (isSourceDirectoryExists) {   
    const files = await readdir("./files");
    for (const file of files) {
     console.log(file)
    }
  } else {
    throw new Error("FS operation failed");
  }
};

await list();