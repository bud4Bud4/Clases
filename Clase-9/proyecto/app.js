let peliculas = require("./peliculas")

for (i=0; i<peliculas.length; i++) {
    console.log(peliculas[i].miCadena())
}

let fs = require("fs")

let mensaje = fs.readFileSync("mensaje.txt", "utf-8")
console.log(mensaje)