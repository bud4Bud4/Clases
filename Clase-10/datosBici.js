const fs = require("fs")

let conversorJson = dir => {
    let archivoJson = fs.readFileSync(dir, "utf-8");
    let convertido = JSON.parse(archivoJson);
    return convertido;
}
module.exports = conversorJson