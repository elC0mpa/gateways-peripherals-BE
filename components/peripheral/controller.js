const store = require("./store");

function addPeripheral(gateway, uid, vendor, status) {
  return store.add({
    gateway,
    uid,
    vendor,
    status,
  });
}

function getPeripherals() {
  return store.list();
}

function getPeripheral(id) {
  return store.get(id);
}

function deletePeripheral(id) {
  return store.delete(id);
}

module.exports = {
  addPeripheral,
  getPeripherals,
  getPeripheral,
  deletePeripheral,
};
