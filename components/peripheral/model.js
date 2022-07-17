const mongoose = require("mongoose");

const peripheralSchema = new mongoose.Schema({
  gateway: {
    type: mongoose.Schema.ObjectId,
    ref: "gateway",
    required: [true, "Gateway ID is required"],
  },
  uid: {
    type: Number,
    required: [true, "UID is required"],
  },
  vendor: {
    type: String,
    required: [true, "Vendor is required"],
  },
  createdAt: {
    type: Date,
    required: [true, "Created at is required"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const model = mongoose.model("peripheral", peripheralSchema);

module.exports = model;
