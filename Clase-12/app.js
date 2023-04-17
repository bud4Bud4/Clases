
let persona = require("./personas.json")
let autosImportados = require("./autos.json")

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
   autosParaLaVenta : function () {return this.autos.filter(row => row.vendido == false)},
   autosNuevos : function () {return this.autosParaLaVenta().filter(row => row.km < 100)},
   listaDeVentas : function () {
    let vendidos = this.autos.filter(row => row.vendido == true)
    return vendidos.map(row => row.precio)
   },
   totalDeVentas : function () {return this.listaDeVentas().reduce((acum, ele) => acum + ele, 0);},
   puedeComprar : function (auto, persona) {
    if ((persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas)) return true
    else return false
   },
   autosQuePuedeComprar : function (persona) {return this.autosParaLaVenta().filter(row => this.puedeComprar(row, persona))
    // return this.autosParaLaVenta().filter(row => ((persona.capacidadDePagoTotal >= row.precio) && (persona.capacidadDePagoEnCuotas >= row.precio / row.cuotas)))
   }
};

let nombreDeLaPersona = "Jose"
let cliente = persona.find(row => row.nombre == nombreDeLaPersona)
console.log (nombreDeLaPersona)
console.log (cliente)
console.log(concesionaria.autosParaLaVenta())
console.log (concesionaria.autosQuePuedeComprar(cliente))

