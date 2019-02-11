var seneca = require("seneca")();

seneca.client({ port: "9090", pin: { role: "accountManagement" } });
