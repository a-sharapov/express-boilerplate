import express, { Express, RequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import log4js from 'log4js';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { AppController } from './controllers';
import { ErrorHandler } from './middlewares';
import httpContext from 'express-http-context';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import { MOTD } from './constants';

const app: Express = express();
const redirectToApi = (_, response) => {
  response.redirect(`/api/${process.env.API_VERSION}/`);
}

app.use(cors() as RequestHandler);
app.use(bodyParser.json() as RequestHandler);
app.use(httpContext.middleware as RequestHandler);

dotenv.config();
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/api/v1/health', (_, response) => {
  response.sendFile('health.html', { root: `${__dirname}/views/` });
});
app.get('/', redirectToApi);
app.get('/api', redirectToApi);

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
