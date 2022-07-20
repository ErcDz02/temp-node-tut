const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

// get the base (last) path
const base = path.basename(filePath);
// console.log(base);

const path1 = path.resolve("hello");
const path2 = path.join("hello");

console.log(`Path 1: ${path1}`);
console.log(`Path 2: ${path2}`);

console.log(path1 == path2);
