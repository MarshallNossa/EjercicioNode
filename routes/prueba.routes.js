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

storage.get("/listarBodegas", (req, res) => {
    con.query(
        /* sql */ `SELECT * FROM bodegas ORDER BY nombre ASC;`,
        (err, data, fill) => {
            res.send(JSON.stringify(data));
        }
    )
});
//Ruta para crear la bodega
storage.get("/crearBodega", (req, res) => {
    const formulario = bodegaFormulario();
    res.send(formulario);
})

storage.post("/guardarBodega", (req, res) => {
    const {nombre, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at} = req.body;
    
    con.query(
        /* sql */ `INSERT INTO bodegas ( "id", "nombre", "id_responsable", "estado", "created_by", "updated_by", "created_at", "updated_at", "deleted_at") VALUES (?,?,?,?,?,?,?,?)`,
        [nombre, id_responsable, estado, created_by, updated_by, created_at, updated_at, deleted_at],
        (err, data, fill) => {
            res.send(JSON.stringify(data))
        }
    )
})

export default storage;