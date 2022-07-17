const store = require("./store");

function addGateway(serialNumber, label, address) {
  return store.add({ serialNumber, label, address });
}

function getGateways() {
  return store.list();
}

function getGateway(id) {
  return store.get(id);
}

function deleteGateway(id) {
  return store.delete(id);
}

module.exports = {
  addGateway,
  getGateways,
  getGateway,
  deleteGateway,
};
