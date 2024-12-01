
import {Request, Response} from "express";

export default class GetController
{
    public static get(request: Request, response: Response): Response
    {
        return response.status(200).send("Hello world");
    }
}