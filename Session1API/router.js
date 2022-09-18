const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.route("/assets").get(controller.getAssetList);

router.route("/departments").get(controller.getDepartmentList);

router.route("/assetgroups").get(controller.getAssetGroupList);

module.exports = router;
