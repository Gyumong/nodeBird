/** @format */

const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Post } = require("../models");
const db = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(req.headers);
  // GET /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          // 비밀번호만 빼고 가져오겠다 할때
          exclude: ["password"],
        },
        // user data에 Followings랑 followers 같은거나 Post 정보 합치기
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  //GET/user/1

  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.userId },
      attributes: {
        // 비밀번호만 빼고 가져오겠다 할때
        exclude: ["password"],
      },
      // user data에 Followings랑 followers 같은거나 Post 정보 합치기
      include: [
        {
          model: Post,
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
    });
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON(); // 개인정보 침해 예방
      data.Posts = data.Posts.length;
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      res.status(200).json(data);
    } else {
      res.status(404).json("존재하지 않는 사용자 입니다.");
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
});
// 미들웨어 확장으로 passpost.auth~에서 next를 못쓰는데 쓸수있게 확장
router.post("/login", isNotLoggedIn, (req, res, next) => {
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
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          // 비밀번호만 빼고 가져오겠다 할때
          exclude: ["password"],
        },
        // user data에 Followings랑 followers 같은거나 Post 정보 합치기
        include: [
          {
            model: Post,
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});
router.post("/", isNotLoggedIn, async (req, res, next) => {
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

router.post("/logout", isLoggedIn, (req, res) => {
  req.logOut();
  req.session.destroy();
  res.send("ok");
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // PATCH/user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저 입니다.");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // DELETE/user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저 입니다.");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get("/followers", isLoggedIn, async (req, res, next) => {
  // GET /user/followers
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저 입니다.");
    }
    const followers = await user.getFollowers();
    res.status(200).json(followers);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get("/followings", isLoggedIn, async (req, res, next) => {
  // GET /user/followings

  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저 입니다.");
    }
    const followings = await user.getFollowings();
    res.status(200).json(followings);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete("/follower/:userId", isLoggedIn, async (req, res, next) => {
  // DELETE /user/follower/2
  // DELETE/user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send("존재하지 않는 유저를 차단하려 하시네요.");
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;
