var winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
 
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});
 
const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;