import { STATUS_CODES } from "../utils/constants";
import type { HttpStatusCodes } from "../utils/types";

export class AppError extends Error
{
    public statusCode: number;

    private constructor(message: string, statusCode: keyof HttpStatusCodes)
    {
        super(message);
        this.statusCode = STATUS_CODES[statusCode];
    }

    public static badRequest(message: string): AppError
    {
        return new AppError(message, "badRequest");
    }

    public static internalServerError(message = "Internal server error"): AppError
    {
        return new AppError(message, "internalServerError");
    }
}