// function sumatoriaBajoImporte (unSemestre) {
//     let sumatoriaGanancias = 0
//     let cantMeses = unSemestre.length
//     console.log()
//     for (let i=0; i < cantMeses; i++) {
//         unSemestre[i] > 0 && unSemestre[i] <= 1000 ? sumatoriaGanancias += unSemestre[i] : "";
//     }
//     return sumatoriaGanancias
// }
// let semestre1 = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]

// console.log (sumatoriaGananciasSemestre(semestre1))

// let asientosDisponibles = (asientosDisponibles, solicitado) => {
//     if (asientosDisponibles.indexOf(solicitado) != -1 ){
//         console.log("Felicitaciones, el asiento número " + solicitado + " está disponible")
//     } else {
//         console.log("Lo sentimos, el asiento número " + solicitado + " está ocupado, pero aún quedan " + asientosDisponibles.length + " asientos disponibles. Los mismos son: " + asientosDisponibles.join(", "))
//     }
// }
// let asientosTotoro = [1, 2, 3, 4, 5, 10, 11, 23, 12, 25]
// asientosDisponibles(asientosTotoro, 22)

// let arrayClave = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] 
// function laClaveSecreta (clave) {
//     let claveDescifrada = ""
//     for (i=clave.length - 1; i>=0; i--){
//         clave[i] != "*" ? claveDescifrada += clave[i] : "";
//     }
//     return claveDescifrada;
// }
// console.log(laClaveSecreta(arrayClave))
// let arrayClave = ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]
// function laClaveSecreta (clave) {
//     let claveDescifrada = ""
//     for (let i=clave.length - 1; i>=0; i--){
//         if (clave[i] != "*"){ 
//             claveDescifrada += clave.pop()
//             }
//         else {
//             clave.pop()
//             }
//     }
//     return console.log(claveDescifrada);
// }
// laClaveSecreta(arrayClave)

/*Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de 
cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los siguientes ejemplos:

 // Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren']
Otro ejemplo:

  // Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren']
Otro ejemplo:

  // Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren',
'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']*/

// function reporteDePasajeros(estacion, pasajerosAlInicio, pasajerosPlusXEstacion, pasajerosMinusXEstacion, pasajerosPlusEstacion5, pasajerosMinusEstacion5) {
//     let reporteFinal = []
//     for (i=0; i<=estacion; i++) {
//         if (i == 0) {
//             totalPasajeros = pasajerosAlInicio
//         }
//         else if (i != 5) {
//             totalPasajeros += pasajerosPlusXEstacion - pasajerosMinusXEstacion
//         } else {
//             totalPasajeros += pasajerosPlusEstacion5 - pasajerosMinusEstacion5
//         }
//         reporteFinal.push("En la estación "+ i +" hay " + totalPasajeros + " pasajeros arriba del tren")
//     }
//     return reporteFinal;
// }
// console.log(reporteDePasajeros(6, 200, 50, 30, 120, 80))

//Reporte de pasajeros general pasandole 3 arrays, uno inicial con la cantidad de estaciones del recorrido y la carga inicial, otro con las subidas y otro con las bajadas
//

function reporteDePasajeros(arrayInicial, arrayUpPasajeros, arrayDwnPasajeros) {
    let reporteFinal = []
    for (i=0; i <= arrayInicial[0]; i++) {
        i == 0 ? totalPasajeros = arrayInicial[1] : totalPasajeros += arrayUpPasajeros[i-1] - arrayDwnPasajeros[i-1];
        reporteFinal.push("En la estación "+ i +" hay " + totalPasajeros + " pasajeros arriba del tren")
    }
    return reporteFinal;
}
let iniciales15DeMayo = [6, 200]
let pasajerosUp15DeMayo = [50, 120, 10, 40, 10, 90]
let pasajerosDwn15DeMayo = [30, 80, 40, 40, 2, 1]
console.log(reporteDePasajeros(iniciales15DeMayo, pasajerosUp15DeMayo, pasajerosDwn15DeMayo))