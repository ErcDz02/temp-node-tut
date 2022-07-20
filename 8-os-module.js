// https://www.youtube.com/watch?v=Oe421EPjeBE
// 44:18
// 1:28:36

const os = require("os");

//info about current user
const user = os.userInfo();

// method return returns the system uptime in seconds
const upTime = os.uptime();

//interesting info about operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// 1:34:36

console.log(currentOS);
