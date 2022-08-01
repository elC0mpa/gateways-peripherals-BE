const model = require("./model");
const gatewayModel = require("../gateway/model");

function addPeripheral(gateway, uid, vendor, status) {
  console.log("Add peripheral received params: ", gateway, uid, vendor, status);
  return new Promise(async (resolve, reject) => {
    try {
      const createdPeripheral = new model({
        gateway,
        uid,
        vendor,
        status,
        createdAt: new Date(),
      });
      const saved = await createdPeripheral.save();
      const gatewayToUpdate = await gatewayModel.findById(gateway);
      gatewayToUpdate.peripherals.push(saved._id);
      await gatewayToUpdate.save();
      resolve(saved);
    } catch (error) {
      reject(error);
    }
  });
}

function getPeripherals() {
  return new Promise(async (resolve, reject) => {
    try {
      const peripherals = await model.find();
      resolve(peripherals);
    } catch (error) {
      reject(error);
    }
  });
}

function getPeripheral(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const peripheral = await model.findById(id);
      resolve(peripheral);
    } catch (error) {
      reject(error);
    }
  });
}

function deletePeripheral(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const peripheral = await model.findByIdAndDelete(id);
      const { gateway } = peripheral;
      gatewayModel.updateOne(
        {
          _id: gateway,
        },
        {
          $pullAll: {
            peripherals: id,
          },
        }
      );
      // gatewayModel.updateOne(
      //   { _id: gateway },
      //   { $pull: { peripherals: gateway } }
      // );
      resolve(peripheral);
    } catch (error) {
      reject(error);
    }
  });
}

function updatePeripheralStatus(id, status) {
  return new Promise(async (resolve, reject) => {
    try {
      const peripheral = await model.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      resolve(peripheral);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  addPeripheral,
  getPeripheral,
  getPeripherals,
  deletePeripheral,
  updatePeripheralStatus,
};
