import ErrorHandler from "./errorHandler.global";
import { logger } from "../";

export {
    ErrorHandler,
}

export const hookBefore = (req: Request, res: Response, next?: (err?: typeof Error) => void): any => {
    logger.info(`Trigger of the hook before: ${req.method} ${req.url}`);
    next();
};

export const hookAfter = (req: Request, res: Response, next?: (err?: typeof Error) => void): any => {
    logger.info(`Trigger of the hook after: ${req.method} ${req.url}`);
    next();
};