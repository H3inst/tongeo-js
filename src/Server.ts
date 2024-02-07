import express, { 
    type NextFunction, 
    type Request, 
    type Response, 
    type Router
} from "express";
import morgan from "morgan";
import cors from "cors";

import type { ErrorTypes } from "./utils/types";
import { ResponseHelper } from "./common/ResponseHelper";

interface ServerOptions {
    port?: number;
    router: Router;
}

export class Server
{
    public readonly app = express();
    private readonly port: number;
    private readonly router: Router;

    public constructor(options: ServerOptions)
    {
        this.port = options.port || 6789;
        this.router = options.router;
    }

    public async start(): Promise<void>
    {
        this.app.use(morgan("dev"));

        // These middlewares are for JSON and x-www-form-urlencoded body.
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());

        this.app.use(this.router);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.app.use((err: ErrorTypes, _req: Request, res: Response, _next: NextFunction) =>
        {
            const response = new ResponseHelper();
            return response.errorResponse(res, err);
        });

        this.app.listen(this.port, () =>
        {
            console.log(`Server started at port ${this.port}`);
        });
    }
}