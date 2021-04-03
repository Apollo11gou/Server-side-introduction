"use strict";
const axios = require("axios");
// get メソッドに対してリクエストの URL とリクエストのレスポンスを受け取った際の無名関数を渡す
axios.get("https://www.google.com").then((res) => {
  console.log(res.data);
});
