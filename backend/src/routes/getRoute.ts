
import express, {Router, Request, Response} from "express";
import GetController from "../controllers/getController.js";

export default class GetRoute
{
    private static readonly router: Router = <Router> express.Router() as Router;
    public static run(): void
    {
        this.router.get("/", (request: Request, response: Response) =>
        {
            GetController.get(request, response);
        });
    }
    public static getRouter(): Router { return GetRoute.router; }
}
