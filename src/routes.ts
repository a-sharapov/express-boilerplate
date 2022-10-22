import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import { graphqlHTTP } from 'express-graphql';
import { schema } from 'src/db';
dotenv.config();

export const responseWithRoutes = ({ app, apiVersion }) => {
  const redirectToApi = (_, response) => {
    response.redirect(`/api/${apiVersion}/`);
  };

  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get('/api/v1/health', (_, response) => {
    response.sendFile('health.html', { root: path.resolve(__dirname, 'views') });
  });
  app.get('/', redirectToApi);
  app.get('/api', redirectToApi);
  app.use(
    '/api/v1/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development'
    })
  );
};
