import express, { Express } from 'express';
import dotenv from 'dotenv';
import log4js from 'log4js';
import bodyParser from 'body-parser';
import { useExpressServer } from 'routing-controllers';
import { AppController } from './controllers';
import httpContext from 'express-http-context';

const app: Express = express();
app.use(bodyParser.json());
app.use(httpContext.middleware);

dotenv.config();
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;
const port =  process.env.PORT || 5000;

useExpressServer(app, {
  controllers: [AppController],
});

app.use((req: any, res: any, next: any): void => {
  httpContext.ns.bindEmitter(req);
  httpContext.ns.bindEmitter(res);
  next();
});

try {
  app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `
    ,e e,   Y8b Y8Y 888 88e  888,8,  ,e e,   dP"Y  dP"Y 
   d88 88b   Y8b Y  888 888b 888 "  d88 88b C88b  C88b  
   888   ,  e Y8b   888 888P 888    888   ,  Y88D  Y88D 
    "YeeP" d8b Y8b  888 88"  888     "YeeP" d,dP  d,dP  
                    888                                 
                    888         
                    `);
    console.log('\x1b[30m%s\x1b[0m', `  
  It was successfully launched... 🚀
  --`);
  console.log(`And is now available: 📌 %s
  `, `\x1b[32m${process.env.PROTOCOL}://${process.env.HOST}:${port}\x1b[0m`);
  });
} catch (error) {
  logger.error(error);
}
