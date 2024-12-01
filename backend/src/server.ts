
import express, {Express} from "express";
import GetRoute from "./routes/getRoute.js";
import Config from "./config.js";

export default class Server
{
    public static readonly app: Express = <Express> express() as Express;
    public static run(): void
    {
        this.app.use(express.json());
        GetRoute.run();
        this.app.get("/", GetRoute.getRouter());
        this.app.listen(Config.getPORT(), () => console.log(`Server running on port ${Config.getPORT()}`));
    }
}