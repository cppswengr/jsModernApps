var seneca = require("seneca")();

function account(options) {
  this.add({ init: "accouunt" }, function(pluginInfo, respond) {
    console.log(options.message);
    respond();
  });

  this.add({ role: "accountManagement", cmd: "login" }, function(
    args,
    respond
  ) {});

  this.add({ role: "accountManagement", cmd: "register" }, function(
    args,
    respond
  ) {});
}

seneca.use(account, { message: "Plugin Added" });
