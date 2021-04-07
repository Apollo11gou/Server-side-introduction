"use strict";
// {name:タスクの文字列, state: 完了しているかどうかの真偽値}
let tasks = [];

const fs = require("fs");
const fileName = './tasks.json'

//同期的ににファイルから復元
try{
  const data = fs.readFileSync(fileName, 'utf8');
  tasks = JSON.parse(data);
} catch(ignore){
  console.log(fileName + 'から復元できませんでした');
}
/**
 * タスクをファイルに保存する関数
 */
function saveTasks(){
  fs.writeFileSync(fileName, JSON.stringify(tasks), 'utf8');
};
/**
 * TODOを追加する
 * @param{string} task
 */
function add(task) {
  tasks.push({ name: task, state: false });
  saveTasks();
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} taskAndIsDonePair
 * @return {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair.state;
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了していないかを返す
 * @param {object} taskAndIsDonePair
 * @return {boolean} 完了していないかどうか
 */
function isNotDone(taskAndIsDonePair) {
  return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得する
 * @return {array}
 */
function list() {
  // タスクが完了していれば false を、TODO ならば true を返す
  // 引数 t で配列の要素を取得して、選別されたタスクの name プロパティから文字列を取得し、その文字列だけの値に変換する
  return tasks.filter(isNotDone).map((t) => t.name);
}

/**
 * TODOを完了状態にする
 * @param {string} task
 */
function done(task) {
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound !== -1) {
    tasks[indexFound].state = true;
    saveTasks();
  }
}
/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {array}
 */
function donelist() {
  return tasks.filter(isDone).map((t) => t.name);
}

/**
 * 項目を削除する
 * @param{string} task
 */
function del(task) {
  // ask が見つかった場合にはそのインデックスが、見つからなかった場合には -1 が indexFound に代入
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
    saveTasks();
  }
}
module.exports = {
  add,
  list,
  done,
  donelist,
  del,
};
