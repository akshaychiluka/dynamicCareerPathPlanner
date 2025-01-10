const express = require('express');
const { getCareerPaths } = require('../controllers/careerController');

const router = express.Router();

router.get('/:userId', getCareerPaths);

module.exports = router;