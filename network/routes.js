const gateway = require("./../components/gateway/network");
const peripheral = require("./../components/peripheral/network");
const routes = (server) => {
  server.use("/gateway", gateway);
  server.use("/peripheral", peripheral);
};

module.exports = routes;
