/** @format */
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const hpp = require("hpp");
const helmet = require("helmet");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const passportConfig = require("./passport");
const path = require("path");
const app = express();
dotenv.config();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://localhost:3000", "nodebird.com"], // credentials:true로 쿠키전역공유했으니 *로는 보안안되고 정확한주소를적어야댐
    credentials: true,
  })
); // 모든 요청에 허용

app.use("/", express.static(path.join(__dirname, "uploads")));

// 밑 두줄은 프론트에서 보낸 데이터를 req.body에 넣어주는 역할을 해줌
// 위치는 위에 있어야한다. 순서중요
// json을 req.body에 넣어줌
app.use(express.json());
// form submit url인코딩을 form data를 req.body에 넣어줌
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session());
app.use(passport.initialize());
app.use(
  passport.session({
    saveUninitalized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET, // 쿠키에 보내는 랜덤한 문자열
  })
);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

app.listen(3080, () => {
  console.log("서버 실행즁");
});
