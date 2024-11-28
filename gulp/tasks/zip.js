import fs from "fs";
import archiver from "archiver";

export const zip = async () => {
  const output = fs.createWriteStream(`./${app.path.rootFolder}.zip`);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", () => console.log(`${archive.pointer()} total bytes`));
  archive.on("error", (err) => { throw err; });

  archive.pipe(output);
  archive.directory(`${app.path.buildFolder}/`, false);
  archive.finalize();
};
