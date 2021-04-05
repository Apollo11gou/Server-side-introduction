"use strict";

new Promise((resolve) => {
  const nowDate = new Date();
  resolve(nowDate);
}).then((v1) => {
  //v1は現在の時刻情報
  new Promise((resolve) => {
    const monthAndDate = {
      month: v1.getMonth(),
      date: v1.getDate(),
    };
    resolve(monthAndDate);
  }).then((v2) => {
    //ｖ２は日付情報
    new Promise((resolve) => {
      const text = `今日は${v2.month + 1}月${v2.date}日です。`;
      resolve(text);
    }).then((v3) => {
      //v3は日付を示す文章
      console.log(v3); //今日の日付に関する文章が出力されている
    });
  });
});
