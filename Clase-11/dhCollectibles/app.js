let misObjetos = require("./collectibles")

let unifiedCollectibles = misObjetos("./datos/figuras1.json", "./datos/figuras2.json", "./datos/figuras3.json")

let collectibles = {
    figuras : unifiedCollectibles,
    listFigures : function (){for (let x of this.figuras){console.log(x)}},
    figuresByBrand : function (marca){
        let byBrand = this.figuras.filter(row => row.marca == marca)
        return byBrand;
    },
}

console.log(collectibles.figuras)