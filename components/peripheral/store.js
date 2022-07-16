const model = require("./model");

function addPeripheral(peripheral) {
  const createdAt = new Date();
  const createdPeripheral = new model(peripheral);
  createdPeripheral.save();
}

async function getPeripherals() {
  const peripherals = await model.find();
  return peripherals;
}

async function getPeripheral(id) {
  const peripheral = await model.findById(id);
  return peripheral;
}

async function deletePeripheral(id) {
  const peripheral = await model.findByIdAndDelete(id);
  return peripheral;
}

module.exports = {
  add: addPeripheral,
  get: getPeripheral,
  list: getPeripherals,
  delete: deletePeripheral,
};
