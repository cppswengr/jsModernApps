var seneca = require("seneca")();

seneca.use("./account.js", {message: "Plugin Added"});
