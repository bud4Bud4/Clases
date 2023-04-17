const datosBici = require("./datosBici");
let datos = datosBici("./bicicleta.json")

let dhBicis = {
    bicicletas : datos,
    buscarBici : function (id) {
        let biciBuscada = this.bicicletas.find(objeto => id == objeto.id);
        if (biciBuscada) return biciBuscada;
        else return null;
        },
    venderBici : function (id) {
        let biciBuscada = this.buscarBici(id)
        if (biciBuscada) {
            biciBuscada.vendida = true;
            return this.bicicletas.find(objeto => id == objeto.id);
        }
        else return "Bicicleta no encontrada"
        },
    biciParaLaVenta : function (){
        let biciALaVenta = this.bicicletas.filter(elemento => elemento.vendida == false)
        return biciALaVenta;
    },
    totalDeVentas : function (){
        let biciVendida = this.bicicletas.filter(elemento => elemento.vendida == true)
        let total = biciVendida.reduce((acum, num) => acum + num.precio, 0)
        return total;
    },
    aumentoBici : function (porcentageAumento){
        this.bicicletas.map(row => {
            row.precio = row.precio + row.precio * porcentageAumento/100
        })
        return this.bicicletas
    },
    biciPorRodado : function (nRodado){
        let rodadoFiltrado = this.bicicletas.filter(row => row.rodado == nRodado)
        return rodadoFiltrado;
    },
    listarTodasLasBici : function (){
        for (let x of this.bicicletas) console.log(x);
}
}
console.log(dhBicis.aumentoBici(10))