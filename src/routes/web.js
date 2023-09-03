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
  routes.get("/user/remove/:id", homeController.handleDeleteUser);
  routes.get("/user/update/:id",homeController.handleGetOneUser);
  routes.post("/user/update", homeController.handleUpdateUser);
  return app.use("/", routes);
};

export default initWebRoutes;
