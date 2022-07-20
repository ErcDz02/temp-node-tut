const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (e, res) => {
  if (e) {
    console.log(e);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (e, res) => {
    if (e) {
      console.log(e);
      return;
    }
    const second = result;
  });
  writeFile("./content/result-sync.txt", (e, res) => {
    if (e) {
      console.log(e);
      return;
    }
    console.log(res);
  });
});
