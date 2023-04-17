let operacion = "%" //+-*/
let num1 = 4
let num2 = 8
let resultado = 0
switch (operacion) {
    case "+":
        resultado = num1 + num2;
        console.log (resultado);
        break;
    case "-":
        resultado = num1 - num2;
        console.log (resultado);
        break;
    case "*":
        resultado = num1 * num2;
        console.log (resultado);
        break;
    case "/":
        resultado = num1 / num2;
        console.log (resultado);
        break;
    default:
        console.log ("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")

}

