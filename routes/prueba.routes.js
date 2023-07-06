import { Router } from "express";
import mysql from "mysql2";
import bodegaFormulario from "../templates/bodegaForm.js";

const storage = Router();
let con = undefined;

storage.use((req, res, next) => {
    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
}); 
//Endpoint que lista todas las bodegas en orden alfabetico
storage.get("/listarBodegas", (req, res) => {
    con.query(
        /* sql */ `SELECT * FROM bodegas ORDER BY nombre ASC;`,
        (err, data, fill) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error al obtener las bodegas");
        } else {
            res.send(JSON.stringify(data));
        }
        }
    )
});
//Ruta para crear la bodega, esta ruta contiene el formulario que envia los datos al endpoint /guardarBodega
storage.get("/crearBodega", (req, res) => {
    const formulario = bodegaFormulario();
    res.send(formulario);
})

storage.post("/guardarBodega", (req, res) => {
    //Recibo los datos y los convierto en un objeto y los meto en el cuerpo de la consulta del cliente
    const {nombre, id_responsable, estado, created_by, updated_by} = req.body;
    //Recibo todos los datos como string y parseo los necesarios a un entero
    const id_responsableInt = parseInt(id_responsable);
    const estadoInt = parseInt(estado);
    const created_byInt = parseInt(created_by);
    const updated_byInt = parseInt(updated_by);
    //Hacemos la consulta a la base de datos e insertamos los valor obtenidos por la consulta del cliente
    con.query(
        /* sql */ `INSERT INTO bodegas (\`nombre\`, \`id_responsable\`, \`estado\`, \`created_by\`, \`updated_by\`) VALUES ( ?, ?, ?, ?, ?)`,
        [nombre, id_responsableInt, estadoInt, created_byInt, updated_byInt],
        //Retornamos error si algo falla en la consulta, is no falla nos envia el mensaje diciendo que se ha guardado la data
        (err, data, fill) => {
            err ? res.send(err) : res.json({'status': 200, 'message': "data guardada!"}); 
        }
    )
});



export default storage;