import { Transform } from "stream";
import { stdin, stdout } from 'node:process';
import { createReadStream, createWriteStream } from 'node:fs';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.split('').reverse.join(''));
    },
  });

  stdin.on('data', (data) => {   
    const readStream = createReadStream(data);  
    stdout.write(readStream.pipe(reverse))
  })

};

await transform();
