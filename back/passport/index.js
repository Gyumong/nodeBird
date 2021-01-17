/** @format */

const passport = require("passport");
const local = require("./local");
const { User } = require("../models");
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // 1번인자 서버에러 2번인자 성공시
  });
  passport.deserializeUser(async (id, done) => {
    // db에서 id만으로 user 찾아서 정보 복구해줌
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user);
    } catch (e) {
      console.error(e);
      done(error);
    }
  });
  local();
};
