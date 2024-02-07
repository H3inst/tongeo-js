import type { Response } from "express";
import { AppError } from "./AppError";
import { STATUS_CODES } from "../utils/constants";
import type { ErrorTypes } from "../utils/types";

export class ResponseHelper
{

    public sendResponse<T = undefined>(response: Response, data?: T, message: string = "", statusCode = 200): void
    {
        response.status(STATUS_CODES.ok).json({
            data,
            message,
            statusCode: statusCode
        });
    }

    public errorResponse(response: Response, error: ErrorTypes): void
    {
        if (error instanceof AppError)
        {
            response.status(error.statusCode).json({
                data: null,
                message: error.message,
                statusCode: error.statusCode
            });
            return;
        }

        response.status(STATUS_CODES.internalServerError).json({
            data: null,
            message: error.message,
            statusCode: STATUS_CODES.internalServerError,
            trace: error.stack
        });
    }
}