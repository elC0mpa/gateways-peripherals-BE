const express = require("express");

const response = require("./../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  controller
    .getPeripherals()
    .then((peripherals) => {
      response.success(req, res, peripherals, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

router.get("/:id", (req, res) => {
  controller
    .getPeripheral(req.params.id)
    .then((peripheral) => {
      response.success(req, res, peripheral, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

router.post("/", (req, res) => {
  controller
    .addPeripheral(
      req.body.gateway,
      req.body.uid,
      req.body.vendor,
      req.body.status
    )
    .then((peripheral) => {
      response.success(req, res, peripheral, 201);
    })
    .catch((error) => {
      response.error(req, res, error);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deletePeripheral(req.params.id)
    .then((peripheral) => {
      response.success(req, res, peripheral, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

module.exports = router;
