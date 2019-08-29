var express = require('express');
var router = express.Router();

var logger = require('./logger');

logger.info("totalJSHeapSize usedJSHeapSize jsHeapSizeLimit tf_numBytes tf_numBytesInGPU tf_numDataBuffers tf_numTensors");

router.post('/', function(req, res, next) {
  logger.info(`${String(req.body["totalJSHeapSize"])} ${String(req.body["usedJSHeapSize"])} ${String(req.body["jsHeapSizeLimit"])} ${String(req.body["tf_numBytes"])} ${String(req.body["tf_numBytesInGPU"])} ${String(req.body["tf_numDataBuffers"])} ${String(req.body["tf_numTensors"])}`);
  res.status(200).json({
    success: "true"
  });
});

module.exports = router;
