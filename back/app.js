/** @format */

const express = require("express");
const app = express();
const db = require("./models");
const postRouter = require("./routes/post");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/api", (req, res) => {
  res.send("hello api");
});
app.use("/post", postRouter);
app.listen(3080, () => {
  console.log("서버 실행즁");
});
