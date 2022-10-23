import { Express, RequestHandler } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import { graphqlHTTP } from 'express-graphql';
import { schema } from 'src/db';
dotenv.config();

interface InitProps {
  app: Express;
  apiVersion?: string;
}

export const responseWithRoutes = ({ app, apiVersion = 'v1' }: InitProps): void => {
  const redirectToApi: RequestHandler = (_, response) => {
    response.redirect(`/api/${apiVersion}/`);
  };

  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get('/api/v1/health', (_, response) => {
    response.sendFile('health.html', { root: path.resolve(__dirname, 'views') });
  });
  app.get('/', redirectToApi as RequestHandler);
  app.get('/api', redirectToApi as RequestHandler);
  app.use(
    '/api/v1/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development'
    }) as RequestHandler
  );
};
