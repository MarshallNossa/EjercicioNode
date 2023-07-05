import { Router } from "express";
import mysql from "mysql2";

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

export default storage;