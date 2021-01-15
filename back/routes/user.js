/** @format */

const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");

const router = express.Router();

// 미들웨어 확장으로 passpost.auth~에서 next를 못쓰는데 쓸수있게 확장
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // return done 인자 3개가 전달된거
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      // client 에러
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      return res.json(user);
    });
  })(req, res, next);
});
router.post("/", async (req, res, next) => {
  // POST /user/
  try {
    // email 중복체크
    const exUser = await User.findOne({
      // 조건
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      // 중복된 email이있다면 아래 함수호출
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 11); // 비밀번호 암호화
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (e) {
    console.error(e);
    next(e); // next를 통해 error를 보냄 status 500
  }
});

module.exports = router;
