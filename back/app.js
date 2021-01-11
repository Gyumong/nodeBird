/** @format */

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end("hello node");
});
server.listen(3080, () => {
  console.log("서버 실행즁");
});
