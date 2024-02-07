import { AppRouter } from "./Router";
import { Server } from "./Server";

async function bootstrap(): Promise<void>
{
    const server = new Server({
        port: 8080,
        router: AppRouter.routes
    });

    await server.start();
}

bootstrap();