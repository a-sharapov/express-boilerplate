import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import log4js from 'log4js';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { AppController } from './controllers';
import { ErrorHandler } from './middlewares';
import httpContext from 'express-http-context';
import { MOTD } from './constants';
import { responseWithRoutes } from './routes';

const app: Express = express();

app.use(cors() as RequestHandler);
app.use(bodyParser.json() as RequestHandler);
app.use(httpContext.middleware as RequestHandler);

dotenv.config();
export const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

responseWithRoutes({
  app,
  apiVersion: process.env.API_VERSION,
})

useExpressServer(app, {
  routePrefix: `/api/${process.env.API_VERSION}/`,
  controllers: [AppController],
  middlewares: [ErrorHandler],
  defaultErrorHandler: false,
});

try {
  app.listen(process.env.PORT, MOTD);
} catch (error) {
  logger.error(error);
}
