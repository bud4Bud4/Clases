let cursos = [
    ["html5", 4000],
    ["css3", 5000],
    ["javascript", 10000],
    ["react", 7000],
    ["nodejs", 15000],
]

let seleccionados = ["HTML5", "CSS3", "JAVASCRIPT", "REACT"]

let calcularTotal = (cursosDisponibles, cursosDeseados) => {
    let total = 0;
    for ( i=0; i<cursosDisponibles.length; i++) {
        if (cursosDeseados.includes(cursosDisponibles[i][0].toUpperCase())) {
            total += cursosDisponibles[i][1];
        }
    }
    return total;
}

let mensaje = (nombre, apellido, cursosDisponibles, cursosDeseados, pepeElCallback) => {
    let total = pepeElCallback(cursosDisponibles, cursosDeseados)
    return [nombre + " " + apellido, total]
}
let resultado = mensaje("Tomas", "Garcia", cursos, seleccionados, calcularTotal)
console.log("Estimado " + resultado [0] + ", el total a pagar es de: $" + resultado[1])