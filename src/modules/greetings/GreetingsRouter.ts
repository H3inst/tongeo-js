import { Router } from "express";

import { GreetingsService } from "./GreetingsService";
import { GreetingsController } from "./GreetingsController";

export class GreetingsRouter
{
    public static get routes(): Router
    {
        const router = Router();

        const service = new GreetingsService();
        const controller = new GreetingsController(service);

        router.get("/send", controller.sendGreetings.bind(controller));

        return router;
    }
}