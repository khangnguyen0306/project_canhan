import express from "express";
import { response } from "express";
import homeController from '../controllers/homeController';
let route = express.Router();

let initWebRoute = (app) => {
    route.get('/', homeController.getHomePage);

    route.get('/info', homeController.getInfomation);




    return app.use("/", route)
}


module.exports = initWebRoute;