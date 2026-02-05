const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);



// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentOS = {
  name : os.type(), 
  platform :os.platform(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
  arch:os.arch(),
  performance:os.cpus(),
  host :os.hostname()
}

console.log(currentOS)
console.log(os.networkInterfaces())