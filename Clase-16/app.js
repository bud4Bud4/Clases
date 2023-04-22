const express = require("express")
const path = require("path")
const app = express()

app.listen(3000, () => console.log("Esto fue exitoso"));

app.get("/", function(req, res) {
    res.send("Bienvenidos al sitio");
});
// app.get("/r&m", function(req, res) {
//     res.send(require("../Clase-10/rickAndMorty.json"));
// });

// let producto = {
//     tipoProducto : null ,
//     precio : null ,
//     cantidad : null ,
// }

// app.get("/producto/agregar", function(req, res) {
//     producto.tipoProducto = "Alimento"
//     producto.precio = 1000
//     producto.cantidad = 14
//     res.send(producto);
// });

app.get("/miLorem", function(req, res) {
    let htmlPath = path.resolve(__dirname, "./ejemploHTML.html")
    res.sendFile(htmlPath);
});