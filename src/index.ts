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

const app: Express = express();
app.use(cors() as RequestHandler);
app.use(bodyParser.json() as RequestHandler);
app.use(httpContext.middleware as RequestHandler);

dotenv.config();
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;
const port =  process.env.PORT || 5000;

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/api/v1/health', (req, res) => {
  res.sendFile('health.html', { root: `${__dirname}/views/` });
});
useExpressServer(app, {
  controllers: [AppController],
  middlewares: [ErrorHandler],
  defaultErrorHandler: false,
});

try {
  app.listen(port, () => {
    console.log('');
    console.log('\x1b[34m%s\x1b[0m',' ,e e,   Y8b Y8Y 888 88e  888,8,  ,e e,   dP"Y  dP"Y');
    console.log('\x1b[36m%s\x1b[0m', 'd88 88b   Y8b Y  888 888b 888 "  d88 88b C88b  C88b');
    console.log('888   ,  e Y8b   888 888P 888    888   ,  Y88D  Y88D');
    console.log('\x1b[30m%s\x1b[0m',' "YeeP" d8b Y8b  888 88"  888     "YeeP" d,dP  d,dP');
    console.log('\x1b[30m%s\x1b[0m', '                 888');
    console.log('                 %s                        1.0.0', '\x1b[30m888\x1b[0m');
    console.log('');
    console.log('\x1b[30m%s\x1b[0m', `🚀 It was successfully launched:`);
    console.log('');
    console.log('\x1b[32m✓\x1b[0m', 'CORS ', '\x1b[32m✓\x1b[0m', 'Swagger ', '\x1b[32m✓\x1b[0m', 'Logger ', '\x1b[32m✓\x1b[0m', 'Global error handling ');
    console.log('\x1b[32m✓\x1b[0m', 'Http context ', '\x1b[32m✓\x1b[0m', 'Body parser ', '\x1b[32m✓\x1b[0m', 'Routing controllers ');
    console.log('');
    console.log('\x1b[30m%s\x1b[0m', '⸻');
    console.log(`And is now available: 📌 %s`, `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${port}\x1b[0m`);
    console.log('\x1b[30m%s\x1b[0m', '⸻');
    console.log(`Health: 📌 %s`, `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${port}/api/v1/health\x1b[0m`);
    console.log(`Open API: 📌 %s`, `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${port}/api/v1/docs\x1b[0m`);
    console.log('');
  });
} catch (error) {
  logger.error(error);
}
