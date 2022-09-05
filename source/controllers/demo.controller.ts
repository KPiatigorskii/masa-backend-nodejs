import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const getHelloWorld = async (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).json({
        message: "Hello World!"
    });
};

const getWithTimeout = async (req: Request, res: Response, next: NextFunction) => {
    setTimeout(() => {
        return res.status(200).json({
            message: "Timeout in 1 second"
        });
    }, 1000);

};

const getWithDelay = async (req: Request, res: Response, next: NextFunction) => {
    // Read from delay parameter
    let delayInSeconds: number = parseInt(req.params.seconds);
    setTimeout(() => {
        return res.status(200).json({
            message: `Timeout in ${delayInSeconds} second`
        });
    }, delayInSeconds * 1000);

};

const getWithDelayValidated = async (req: Request, res: Response, next: NextFunction) => {
    // Read from delay parameter
    const secondsStringParameter: string = req.params.seconds;
    
    if (isNaN(Number(secondsStringParameter))) {
        // return res.status(406).json({
        //     error: `Incorrect seconds parameter value`
        // });

        //Error responce without a message
        return res.sendStatus(406)
    }
    else {
        let delayInSeconds: number = parseInt(req.params.seconds);
        setTimeout(() => {
            return res.status(200).json({
                message: `Timeout in ${delayInSeconds} second`
            });
        }, delayInSeconds * 1000);
    
    };
}



export default { getHelloWorld, getWithTimeout, getWithDelay, getWithDelayValidated };