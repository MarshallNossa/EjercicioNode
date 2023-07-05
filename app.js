//Importación de las dependencias previamente instaladas
import dotenv from "dotenv";
import express from "express";
//Importación de storage que es donde se encuentran las rutas de los endpoints
import storage from "./routes/prueba.routes.js";
//Esto es necesario para poder cargar las variables de entorno del archivo .env
dotenv.config();
//Esta constante almacena la instancia de express para poder usar el framework
const appExpress = express();
//Creamos una variable con los datos necesarios para levantar el servidor trayendo un objeto tipo json del archivo .env

appExpress.use(express.urlencoded({ extended: true }));

const config = JSON.parse(process.env.MY_CONFIG);
//Se levanta el servidor y se muestra en la consola la url del mismo
appExpress.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`)});
//Esto monta el enrutador con el servidor para poder usar los endpoints, la ruta seria "http://localhost:3000/prueba/endpoint"
appExpress.use("/prueba", storage);