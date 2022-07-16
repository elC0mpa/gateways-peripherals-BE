const model = require("./model");

function addGateway(gateway) {
  const createdGateway = new model(gateway);
  createdGateway.save();
}

async function getGateways() {
  const gateways = await model.find();
  return gateways;
}

async function getGateway(id) {
  const gateway = await model.findById(id);
  return gateway;
}

async function deleteGateway(id) {
  const gateway = await model.findByIdAndDelete(id);
  return gateway;
}

module.exports = {
  add: addGateway,
  get: getGateway,
  list: getGateways,
  delete: deleteGateway,
};
