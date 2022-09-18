const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.route('/pmtasks').get(controller.getPMTasksList);
router.route('/pmtasks/query').get(controller.getPMTasksListByQuery);

router.route('/assets').get(controller.getAssetList);
router.route('/tasks').get(controller.getTaskList);

module.exports = router;