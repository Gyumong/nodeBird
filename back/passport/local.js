/** @format */

const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        // 로그인시 해줄거
        try {
          const user = await User.findOne({
            // email 검사
            where: { email },
          });
          if (!user) {
            // eamil 없으면
            return done(null, false, { reason: "존재하지 않는 이메일입니다." }); // 1자리 서버에러 2자리 성공 3자리 client 에러
          }
          const result = await bcrypt.compare(password, user.password); // db 저장된 비밀번호와 사용자가 입력한 비밀번호 비교
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};
