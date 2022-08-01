const model = require("./model");
const peripheralsModel = require("../peripheral/model");

function addGateway(serialNumber, label, address) {
  return new Promise(async (resolve, reject) => {
    try {
      const createdGateway = new model({
        serialNumber,
        label,
        address,
      });
      const saved = await createdGateway.save();
      resolve(saved);
    } catch (error) {
      reject(error);
    }
  });
}

async function getGateways() {
  return new Promise(async (resolve, reject) => {
    try {
      model
        .find()
        .populate("peripherals")
        .exec((error, populated) => {
          if (error) {
            reject(error);
          }
          resolve(populated);
        });
    } catch (error) {
      reject(error);
    }
  });
}

async function getGateway(id) {
  return new Promise(async (resolve, reject) => {
    try {
      model
        .findById(id)
        .populate("peripherals")
        .exec((error, populated) => {
          if (error) {
            reject(error);
          }
          resolve(populated);
        });
    } catch (error) {
      reject(error);
    }
  });
}

async function deleteGateway(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const gateway = await model.findByIdAndDelete(id);
      gateway.peripherals.length &&
        (await peripheralsModel.deleteMany({
          _id: { $in: gateway.peripherals },
        }));
      resolve(gateway);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  addGateway,
  getGateway,
  getGateways,
  deleteGateway,
};
