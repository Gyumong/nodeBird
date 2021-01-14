/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.use(
  cors({
    origin: "*",
    credentials: false,
  })
); // 모든 요청에 허용

// 밑 두줄은 프론트에서 보낸 데이터를 req.body에 넣어주는 역할을 해줌
// 위치는 위에 있어야한다. 순서중요
// json을 req.body에 넣어줌
app.use(express.json());
// form submit url인코딩을 form data를 req.body에 넣어줌
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/posts", (req, res) => {
  res.json([{ id: 1, content: "hi" }]);
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3080, () => {
  console.log("서버 실행즁");
});
