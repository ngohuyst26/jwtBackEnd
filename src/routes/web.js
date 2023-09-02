import express from "express";
import homeController from "../controller/homeController";

const routes = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  routes.get("/", homeController.handleHome);
  routes.get("/user", homeController.handleUserPage);
  routes.post("/user/create", homeController.handleCreateUser);
  routes.get("/user/delete/:id", homeController.handleDeleteUser);
  return app.use("/", routes);
};

export default initWebRoutes;
