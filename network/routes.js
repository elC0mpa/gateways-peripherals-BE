const gateway = require("./../components/gateway/network");
const routes = (server) => {
  server.use("/gateway", gateway);
};

module.exports = routes;
