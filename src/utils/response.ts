import { Response } from "express";

export const ErrorMessage = ({ res, message }: { res: Response, message: string }) => {
    return res.status(400).json({
        success: false,
        message
    })
}

export const SuccessMessage = ({ res, message }: { res: Response, message: string }) => {
    return res.status(200).json({
        success: true,
        message
    })
}