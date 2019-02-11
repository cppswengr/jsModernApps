var seneca = require("seneca")();

seneca.add({ role: "accountManagement", cmd: "login" }, function(
  args,
  respond
) {});

seneca.add({ role: "accountManagement", cmd: "register" }, function(
  args,
  respond
) {});
