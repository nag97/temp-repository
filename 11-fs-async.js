// readFile and writeFile are asynchronous, meaning they do not block the execution of further code while they are being processed.
// This is particularly beneficial in server environments where maintaining responsiveness is crucial.
// Other operations can continue while file I/O is being handled in the background.
// fs.readFile(path, options, callback)
// asychronous way of reading files
// non-blocking code.
// In the meantime, other code can be executed.

const { readFile, writeFile } = require("fs");
console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result-async.txt', 
      `Here is the result : ${first}, ${second}`
    , (err, result) => {
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
    })
  });  
});
console.log('starting the next one');