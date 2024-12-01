
import express, {Request, Response} from "express";
import GetController from "../controllers/getController.js";

export default class GetRoute
{
    private static readonly router: any = express.Router();
    public static run(): void
    {
        this.router.get("/", (request: Request, response: Response) =>
        {
            GetController.get(request, response);
        });
    }
    public static getRouter(): any { return GetRoute.router; }
}
