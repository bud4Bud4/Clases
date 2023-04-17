let tipoDeVehiculo = "compacto"
let diasDeAlquiler = "10"
let sillaParaBebe = true
let alquilerDeUnVehiculo = (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) => {
    let costoFijo = 0
    let costoTotal = 0
    switch (tipoDeVehiculo) {
        case "compacto":
            costoFijo = 14000 * diasDeAlquiler;
            break;
        case "mediano":
            costoFijo = 17000 * diasDeAlquiler;
            break;
        case "camioneta":
            costoFijo = 28000 * diasDeAlquiler;
            break;
        default:
            console.log("Ingrese un tipo de vehiculo valido")
    }
    sillaParaBebe ? costoTotal = costoFijo + 1200 : costoTotal = costoFijo;

    return costoTotal;
}
if (sillaParaBebe) { 
    console.log ("Estimado cliente: en base al tipo de vehículo ", tipoDeVehiculo," que eligió, considerando los", diasDeAlquiler, " días utilizados, y sumado el cargo por la silla para bebes, el monto total a pagar es de $", alquilerDeUnVehiculo (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe))
}else{
    console.log ("Estimado cliente: en base al tipo de vehículo ", tipoDeVehiculo," que eligió, considerando los", diasDeAlquiler, " días utilizados, el monto total a pagar es de $", alquilerDeUnVehiculo (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe))
}
