import log4js from 'log4js';
import dotenv from 'dotenv';
dotenv.config();

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

export default logger;
