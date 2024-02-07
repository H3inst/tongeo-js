import type { NextFunction, Request, Response } from "express";
import type { GreetingsService } from "./GreetingsService";
import { ResponseHelper } from "@app/common/ResponseHelper";

export class GreetingsController extends ResponseHelper
{
    private readonly greetingsService: GreetingsService;

    public constructor(greetingsService: GreetingsService)
    {
        super();
        this.greetingsService = greetingsService;
    }

    public async sendGreetings(req: Request, res: Response, next: NextFunction): Promise<void>
    {
        try
        {
            const result = await this.greetingsService.sendGreetings(<string>req.query.name);
            super.sendResponse(res, result);            
        } 
        catch (error)
        {
            next(error);
        }
    }
}