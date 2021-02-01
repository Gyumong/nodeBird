/** @format */

const express = require("express");
const router = express.Router();
const { Post, Hashtag, User, Image, Comment } = require("../models");
const { Op } = require("sequelize");

router.get("/:hashtag", async (req, res, next) => {
  //GET /hashtag/노드
  // GET /posts
  try {
    let where = {};
    if (parseInt(req.query.lastId)) {
      // 초기로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId) };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ], // 최신 게시글 부터 가져오기
      include: [
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.hashtag) },
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 좋아요 누른사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
