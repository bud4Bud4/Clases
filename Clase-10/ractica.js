// let estudiantes = [
//     {nombre: 'John', promedio: 8.5, aprobado: true},
//     {nombre: 'Jane', promedio: 7, aprobado: true},
//     {nombre: 'June', promedio: 3, aprobado: false},
// ]
// let aprobados = estudiantes.filter(function(miArray){
//     return miArray.aprobado === true;
// })
// let desaprobados = estudiantes.filter(function(row){
//     return row.aprobado === false;
// })
// console.log(aprobados, desaprobados)

// let horariosPartida = [12, 14, 18, 21];
// let horariosAtrasados = horariosPartida.map(miArray => miArray - 1)
// console.log(horariosAtrasados)

// let vueltas = [5, 8, 12, 3, 22]
// let totalVueltas = vueltas.reduce((acum, num) => {
//     acum = 100;
//     return acum - num;
// })
// console.log(totalVueltas)

// let listaDeSuperMercado = [
//     'Bife de chorizo', 
//     'Coca Cola', 
//     'Bananas', 
//     'Lechuga', 
//     'Chimichurri', 
//     'Lata de tomates', 
//     'Arvejas', 
//     'Cereales', 
//     'Pechuga de pollo', 
//     'Leche'
// ];
// let oLiteral = {nombre: 'John', promedio: 8.5, aprobado: true}
// let miJson = JSON.stringify(oLiteral)
// console.log(miJson)

// let pepe = listaDeSuperMercado.forEach((row/*element*/, index, miArray) => {
//     console.log(index + 1 + " " + row)
// })
// console.log(listaDeSuperMercado)

// let numeros = [2,4,6]
// let elDoble = numeros.map((numero, indice, numeros) =>{
    
// })
// console.log(elDoble)

// let numeros = [2, 4, 6]
// let sumatoria = numeros.reduce((acum, currentValue) => acum + currentValue, initialValue)

//.find() retorna un valor, que va a ser el primer elemento que cumpla la condicion que le pase
// let edades = [21,24,25,63,54,32,12,32,53,75,87,23]
// let encontrada = edades.find(row => row > 21)
// console.log(encontrada)

// let listaDeSuperMercado = [
//     'Bife de chorizo', 
//     'Coca Cola', 
//     'Bananas', 
//     'Lechuga', 
//     'Chimichurri', 
//     'Lata de tomates', 
//     'Arvejas', 
//     'Cereales', 
//     'Pechuga de pollo', 
//     'Leche'
// ];
// // listaDeSuperMercado.forEach(function(row) {
// //     console.log(row)
// // })
// let personajeEncontrado = listaDeSuperMercado.find((personaje) => personaje == "Bife de chorizo") 
// console.log(personajeEncontrado)

const fs = require("fs")
let holita = "hola rey escribí el txt"
let leoUnArchivo = fs.readFileSync("./consignas.txt", "utf-8")
fs.writeFileSync("./pruebitaTxt.txt", holita, "utf-8")
console.log(leoUnArchivo)