let misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [cero, , dos, , cuatro, , , , , ] = misNumeros
let nuevoArray = misNumeros.filter(row => row != cero && row != dos && row != cuatro)


console.log(nuevoArray)

let mascota = {
    nombre : "Umi",
    tipoDeMascota : "Perro",
    color : "Dorado",
    raza : "Labrador",
}
let {nombre, tipoDeMascota, color, raza} = mascota
console.log("Hola, les presento a mi mascota " + nombre + ", es un hermoso " + tipoDeMascota.toLowerCase() + " de color " + color.toLowerCase() + ", y su raza es " + raza.toLowerCase())