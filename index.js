/**
 * Created by lsw on 2018/12/3 0003.
 */
const express = require('express');
const router = require('./router');
const db = require('./db');
const app = express();
(async () => {
  await db;
  app.use(router);
})();

app.listen(6000 , err => {
  if(!err) console.log('服务器启动成功请访问:http://localhost:6000')
  else console.log(err);
})