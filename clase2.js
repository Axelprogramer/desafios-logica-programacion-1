/*Pregunta al usuario qué día de la semana es. Si la respuesta es 
"Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".*/
let diaSemana = prompt("que dia de semana es: ")

if (diaSemana == "sabado"){
    alert("¡Buen fin de semana!")
}else if (diaSemana == "domingo"){
    alert("¡Buen fin de semana!")
}else {
    alert("¡Buena semana!")
}

/*Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.*/
const numero = prompt("ingrese un numero: ")

if (numero > 0){
    alert("Este numero es positivo")
}else{
    alert("Este numero es negativo")
}

/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor
o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.".*/
let puntuación = 50
if(puntuación>=100){
    alert("¡Felicidades has ganado!")
}else{
    alert("Intentalo nuevamente para ganar")
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
utilizando un template string para incluir el valor del saldo.*/
let saldo = 30000

alert(`El saldo actual de tu cuenta es ${saldo}`)

/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, 
muestra una alerta de bienvenida usando ese nombre.*/

let nombre_usuario = prompt("ingrese su nombre de usuario: ")
alert(`Bienvenido ${nombre_usuario}`)