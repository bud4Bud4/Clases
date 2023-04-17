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
let persona = {
    nombre : "Juan",
    capacidadDePagoEnCuotas : 20000,
    capacidadDePagoTotal: 150000
    }
const autosImportados = autosOriginal

const autosImportados = require("./autos")
let concesionaria = {
   autos : autosImportados,
   buscarAuto : function (patente) {
      let autoEncontrado = this.autos.find(row => row.patente == patente)
      if (autoEncontrado) return autoEncontrado;
      else return null
   },
   venderAuto : function (patente) {
    if (this.buscarAuto(patente)) this.buscarAuto(patente).vendido = true;
    else return "Patente no encontrada";
   },
   autosParaLaVenta : function () {
    return this.autos.filter(row => row.vendido == false)
   },
   autosNuevos : function () {
    return this.autosParaLaVenta().filter(row => row.km < 100)
   },
   listaDeVentas : function () {
    let vendidos = this.autos.filter(row => row.vendido == true)
    return vendidos.map(row => row.precio)
   },
   totalDeVentas : function () {
    return this.listaDeVentas().reduce((acum, ele) => acum + ele, 0);
   },
   puedeComprar : function (auto, persona) {
    if ((persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas)) return true
    else return false
   },
   autosQuePuedeComprar : function (persona) {
    return this.autosParaLaVenta().filter(row => this.puedeComprar(row, persona))
    // return this.autosParaLaVenta().filter(row => ((persona.capacidadDePagoTotal >= row.precio) && (persona.capacidadDePagoEnCuotas >= row.precio / row.cuotas)))
   }
};

console.log(concesionaria.autosQuePuedeComprar(persona))