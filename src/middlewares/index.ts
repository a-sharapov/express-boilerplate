import { Request, Response, NextFunction } from 'express';
import { logger } from 'utils';
import ErrorHandler from './errorHandler.global';

export { ErrorHandler };

export const hookBefore = (req: Request, res: Response, next: NextFunction): void => {
  logger.info(`Trigger of the hook before: ${req.method} ${req.url}`);
  next();
};

export const hookAfter = (req: Request, res: Response, next: NextFunction): void => {
  logger.info(`Trigger of the hook after: ${req.method} ${req.url}`);
  next();
};
