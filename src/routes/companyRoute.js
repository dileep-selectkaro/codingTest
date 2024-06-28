const express = require('express');
const router = express.Router();
const { create, fetchData } = require("../controllers/companyController");

router.post('/create', create);
router.get('/fetched', fetchData);

module.exports = router;
