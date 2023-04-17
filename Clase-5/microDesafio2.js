let primeraFuncion = (tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) => {
    let costoBase = 0
    let costoAderezos = 0
    let costoMasAderezos = 0
    switch (tipoDeHamburguesa) {
        case "Carne a la parrilla":
            costoBase = 1800
            break;
        case "Pollo":
            costoBase = 1500
            break;
        case "Vegetariana":
            costoBase = 1200
            break;
    }
    jamon ? costoAderezos += 30 : "";
    queso ? costoAderezos += 25 : "";
    salsaDeTomate ? costoAderezos += 5 : "";
    mayonesa ? costoAderezos += 5 : "";
    mostaza ? costoAderezos += 5 : "";
    tomate ? costoAderezos += 15 : "";
    lechuga ? costoAderezos += 10 : "";
    cebolla ? costoAderezos += 10 : "";
    
    costoMasAderezos = costoAderezos + costoBase;
    return costoMasAderezos;
}

let respuesta = (nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callbackPrimeraFuncion) => {
    return "Hola " + nombre + " " + apellido + ", el monto total a pagar es de $" + callbackPrimeraFuncion(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla)
}

console.log (respuesta("Camila", "Garcia", "Carne a la parrilla", true, true, true, true, true, true, true, true, primeraFuncion))
