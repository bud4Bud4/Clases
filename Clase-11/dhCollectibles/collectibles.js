const { readFileSync } = require("fs")

let final = []

let importar = (...dir) => { 
    for(let i = 0; i < dir.length; i++){
        let operador = JSON.parse(readFileSync(dir[i]), "utf-8")
        for(let j = 0; j < operador.length; j++){
            final.push(operador[j])
        }
    }
    return final;
}
module.exports = importar