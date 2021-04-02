"use strict";
// process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列。
// コマンドライン引数が指定されていればその値、 そうでなければ 0 を変数 number に代入する
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(sum);
