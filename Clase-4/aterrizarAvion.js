let velocidad = 290 //<>
let altura = 270
let alturaMaxima = 278
let alturaMinima = 268
let velocidadMaxima = 300
let velocidadMinima = 150
if (velocidad < velocidadMaxima && velocidad > velocidadMinima) {
    if (altura < alturaMaxima && altura > alturaMinima) {
        console.log ("Su altura y velocidad son aptas, realice el aterrizaje")
    } else {
        console.log("Su altura no es apta para aterizaje, ajuste su altura a", velocidadMinima,"m-", velocidadMaxima, "m")
    }
} else {
    console.log("Su velocidad no es apta para aterrizaje, ajuste su velocidad a", alturaMinima, "km/h-", alturaMaxima, "km/h")
}