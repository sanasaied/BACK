const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3002;
const server = http.createServer(app);
server.listen(Number(port), () => console.log("running on port 3000"));
