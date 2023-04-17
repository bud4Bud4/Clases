const {writeFileSync, readFileSync} = require("fs")

let persona = [{
    nombre : "Juan",
    capacidadDePagoEnCuotas : 20000,
    capacidadDePagoTotal: 150000
    }]
let autosOriginal = [
        {
            marca : "Ford" ,
            modelo : "Fiesta" ,
            precio : 150000 ,
            km : 200 ,
            color : "Azul" ,
            cuotas : 12 ,
            anio : 2019 ,
            patente : "APL123" ,
            vendido : false ,
        },
        {
            marca : "Toyota" ,
            modelo : "Corolla" ,
            precio : 100000 ,
            km : 0 ,
            color : "Blanco" ,
            cuotas : 14 ,
            anio : 2019 ,
            patente : "JJK116" ,
            vendido : false ,
        }
    ]

convertidoPersona = JSON.stringify(persona)
convertidoAutos = JSON.stringify(autosOriginal)
writeFileSync("./personas.json", convertidoPersona, "utf-8")
writeFileSync("./autos.json", convertidoAutos, "utf-8")

