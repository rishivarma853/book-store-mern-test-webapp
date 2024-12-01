import express from "express";
import GetController from "../controllers/getController.js";
export default class GetRoute {
    static router = express.Router();
    static run() {
        this.router.get("/", (request, response) => {
            GetController.get(request, response);
        });
    }
    static getRouter() { return GetRoute.router; }
}
