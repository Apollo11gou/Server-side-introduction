'use strict';
// {name:タスクの文字列, state: 完了しているかどうかの真偽値}
const tasks =[];
/**
 * TODOを追加する
 * @param{string} task
 */
function add(task){
  tasks.push({name:task, state: false});
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} taskAndIsDonePair
 * @return {boolean} 完了してないかどうか
 */
function isNotDone(taskAndIsDonePair){
  return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得する
 * @return {array}
 */
function list(){
  return tasks
  // タスクが完了していれば false を、TODO ならば true を返す
  .filter(task =>isNotDone(task))
  // 引数 t で配列の要素を取得して、選別されたタスクの name プロパティから文字列を取得し、その文字列だけの値に変換する
  .map(t => t.name);
}
module.exports = {add, list};