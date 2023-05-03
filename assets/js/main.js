console.log("Funciones cadenas de caracteres")
let nombreApellido = prompt("Ingrese su nombre y apellido")

//ReplaceAll reemplaza el primer parámetro por el segundo. Sirve para cuando el usuario pone espacios de sobra por ej
console.log(nombreApellido.replaceAll(" ", ""))
console.log(nombreApellido.replaceAll("o", "1"))
console.log(nombreApellido.replaceAll("Carlos", "Luis").replaceAll("ó", "o"))

//replace reemplaza solo el primer parámetro e ignora los siguientes
console.log(nombreApellido.replace("Carlos", "Luis"));

//Trim quita los espacios vacíos al principio y al final
console.log(nombreApellido.trim())

//TrimStart quita epacios vacíos al principio. TrimEnd quita los espacios vacíos al final
console.log(nombreApellido.trimStart())

//Separación numérica, con el _ es más facil entender los números, pero esto no se muestra al usuario. Es solo a nivel de consola
let numero = prompt("Ingrese un número")

if (numero > 1_000_000) {
    alert("El número mayor a 1 millón")
} else {
    alert("El número es menor o igual a 1 millón")
}