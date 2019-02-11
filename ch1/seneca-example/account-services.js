var seneca = require("seneca")();

seneca.use("./account.js", { message: "Plugin Added" });

sececa.listen({ poert: "9090", pin: { role: "accountManagement" } });
