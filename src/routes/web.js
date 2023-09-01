import express from "express";
import homeController from "../controller/homeController";

const routes = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  routes.get("/", homeController.hanleController);
  return app.use("/", routes);
};

export default initWebRoutes;
