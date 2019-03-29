const express = require('express');
const router = express.Router();
const { index, about, handleRequest, notFound } = require('../controller/indexController');

router.get('/', index);
router.post('/detail', handleRequest)


module.exports = router;
