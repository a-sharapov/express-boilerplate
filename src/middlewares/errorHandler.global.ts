import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'after' })
export default class ErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (error: typeof Error) => any) {
    response.status(error.statusCode || error.httpCode || 500).json(error);
    next(error);
  }
}
