// const datosBici = require("../Clase-10/datosBici");
// let datos = datosBici("../Clase-10/bicicleta.json");

// let [bici1, bici2, bici3] = datos
// let biciUno = bici1
// let {nombre, rodado : totalRodado} = biciUno


// let atributosBici1 = {
//     nombre: "jose",
//     posicion : 3,
//     ...biciUno
// }
// let atributosBici2 = {
//     nombre: "jose",
//     posicion : 3,
//     ...bici2
// }
// console.log(atributosBici1, atributosBici2)




let final = []
let importar = (...dir) => { 
    for(let i = 0; i < dir.length; i++){
        let operador = require(dir[i])
        for(let j = 0; j < operador.length; j++){
            final.push(operador[j])
    }
    }
    // let filtrado1 = convertido1.filter(row => row.marca == marca)
    // let filtrado2 = convertido2.filter(row => row.marca == marca)
    // let filtrado3 = convertido3.filter(row => row.marca == marca)
    
    return final;
}
console.log(importar("./datos/figuras1.json", "./datos/figuras2.json", "./datos/figuras3.json"))