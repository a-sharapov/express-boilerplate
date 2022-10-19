export const hookBefore = (req: Request, res: Response, next?: (err?: typeof Error) => void): any => {
    console.log("hookBefore");
    next();
};

export const hookAfter = (req: Request, res: Response, next?: (err?: typeof Error) => void): any => {
    console.log("hookAfter");
    next();
};