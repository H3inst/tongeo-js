import { Router } from "express";
import { GreetingsRouter } from "./modules/greetings/GreetingsRouter";

export class AppRouter
{
    public static get routes(): Router
    {
        const router = Router();

        router.use("/api/v1/greetings", GreetingsRouter.routes);

        return router;
    }
}