// function imprimirAzul4 () {
//     for ( let i=0; i<4; i++) {
//         console.log("Azul")
//     }
// }
// imprimirAzul4 ();

// function pasandoPorI () {
//     for (let i=0; i<=4; i++) {
//         console.log("acá i tiene el valor de ", i)
//     }
// }
// pasandoPorI ()

// function noParesDeContarImparesHasta(numero) {
//     let n = 0
//     for (let i=0; i<=numero; i++) {
//         i % 2 != 0 ? n++ : ("") ;
//     }
//     return n;
//    }
// console.log(noParesDeContarImparesHasta(1))

// function tablaDeMultiplicar(numero) {
//     let i=1
//     do {
//         console.log(numero + " * " + i + " = " + (numero*i) )
//         i++
//     } while (i <= 10)
// }
// tablaDeMultiplicar (1254)

// var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
// var gananciasPrimerSemestre = [20, 10, -500, 5000, 0, 0]
// var gananciasCuartoTrimestre = [500, 1000, -30]
// function sumatoriaGananciasSemestre(unSemestre) {
//     let sumatoriaGanancias = 0
//     let cantMeses = unSemestre.length
//     console.log()
//     for (let i=0; i < cantMeses; i++) {
//         sumatoriaGanancias += unSemestre[i]
//         console.log("entre al ciclo, i = " + i)
//     }
//     return sumatoriaGanancias
// }
// console.log(sumatoriaGananciasSemestre(gananciasCuartoTrimestre))

// gananciaTotal = [2, 3]
// function sumatoriaGananciasSemestre (unSemestre) {
//     let sumatoriaGanancias = 0
//     let cantMeses = unSemestre.length
//     console.log()
//     for (let i=0; i < cantMeses; i++) {
//         sumatoriaGanancias += unSemestre[i]
//     }
//     return sumatoriaGanancias
// }
// console.log(sumatoriaGananciasSemestre([2, 3]))
// console.log(sumatoriaGananciasSemestre([2, 3, 1, 8, 8, -1]))
// console.log(sumatoriaGananciasSemestre([]))

// function saldosDeMesesConGanancia(unPeriodo) {
//     let cantidad = [];
//   for (let i = 0; i < unPeriodo.length; i++) {
//     if (unPeriodo[i] > 0) {
//        cantidad.push(unPeriodo[i])
//        }
//   }
//   return cantidad;
// }


let num = 1
for (let i = 0; i < 20;) {
	if (num%2!=0) {
    	console.log(num);
    	i++;
	}
	num++
}