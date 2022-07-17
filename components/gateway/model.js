const mongoose = require("mongoose");

const gatewaySchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: [true, "Serial number is required"],
    unique: true,
  },
  label: {
    type: String,
    required: [true, "Label is required"],
  },
  address: {
    type: String,
    validate: {
      validator: function (v) {
        return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid IP address`,
    },
    required: [true, "Address is required"],
  },
});

const model = mongoose.model("gateway", gatewaySchema);

module.exports = model;
