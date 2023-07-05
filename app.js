import dotenv from "dotenv";
import express from "express";
import storage from "./routes/prueba.routes.js";

dotenv.config();
const appExpress = express();

const config = JSON.parse(process.env.MY_CONFIG);

appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`)});

appExpress.use("/prueba", storage);
