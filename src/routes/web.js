import express from "express";

const routes = express.Router();

/**
 * 
 * @param {*} app : express app 
 */

const initWebRoutes = (app) =>{

    routes.get('/', (req, res) =>{
        return res.send("Xin Chao");
    })

    return app.use("/", routes);
}

export default initWebRoutes;