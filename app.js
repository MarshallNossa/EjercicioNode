import dotenv from "dotenv";
import express from "express";

dotenv.config();
const appExpress = express();

const config = JSON.parse(process.env.MY_CONFIG);

appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})
