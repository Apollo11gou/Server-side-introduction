"use strict";
const fs = require("fs");
const fileName = "./test.txt";

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, "utf8", () => resolve());
  });
}
async function main() {
  for (let count = 0; count < 500; count++) {
    fs.appendFileSync(fileName, "あ", "utf8");
    fs.appendFileSync(fileName, "い", "utf8");
    fs.appendFileSync(fileName, "う", "utf8");
    fs.appendFileSync(fileName, "え", "utf8");
    fs.appendFileSync(fileName, "お", "utf8");
    fs.appendFileSync(fileName, "\n", "utf8");
  }
}

main();
