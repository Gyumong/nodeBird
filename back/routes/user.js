/** @format */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

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
