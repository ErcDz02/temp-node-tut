const { readFileSync, writeFileSync, readFile } = require("fs");

//Two Flavors: Async, Non-block, Sync

// Returns content of file
// const first = readFileSync("./content/first.txt", "utf8");

// Make a new file:

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result ${first}, ${second}`,
//   { flag: "a" }
// );

// 22:34

readFile("./content/first.txt", "utf8", (e, result) => {
  if (e) {
    console.log(e);
    return;
  }
  console.log(result);
});
