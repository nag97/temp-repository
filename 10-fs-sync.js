// readFileSync and writeFileSync are blocking, meaning they will stop the execution of further code until they are done.
// This is useful for scripts where you need to ensure that file operations are completed before moving on.
// However, in a server environment, this can lead to performance issues as it blocks the event loop.

const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// If file present, it will rewrite, else it will create one.
// use flag to edit the file, instead of rewrite.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" },
);
console.log('done with this task')
console.log('starting the next one')