import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import httpContext from 'express-http-context';
import { useExpressServer } from 'routing-controllers';
import { AppController } from './controllers';
import { ErrorHandler } from './middlewares';
import { MOTD } from './constants';
import { responseWithRoutes } from './routes';
import { logger } from './utils';

const app: Express = express();

app.use(cors() as RequestHandler);
app.use(bodyParser.json() as RequestHandler);
app.use(httpContext.middleware as RequestHandler);

dotenv.config();

responseWithRoutes({
  app,
  apiVersion: process.env.API_VERSION
});

useExpressServer(app, {
  routePrefix: `/api/${process.env.API_VERSION}/`,
  controllers: [AppController],
  middlewares: [ErrorHandler],
  defaultErrorHandler: false
});

try {
  app.listen(process.env.BACKEND_PORT, MOTD);
} catch (error) {
  logger.error(error);
}
