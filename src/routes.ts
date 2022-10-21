import path from 'path';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

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
};
