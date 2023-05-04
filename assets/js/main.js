console.log("Funciones cadenas de caracteres")
let nombreApellido = prompt("Ingrese su nombre y apellido")

//ReplaceAll reemplaza el primer parámetro por el segundo. Sirve para cuando el usuario pone espacios de sobra por ej
// console.log(nombreApellido.replaceAll(" ", ""))
// console.log(nombreApellido.replaceAll("o", "1"))
// console.log(nombreApellido.replaceAll("Carlos", "Luis").replaceAll("ó", "o"))

//replace reemplaza solo el primer parámetro e ignora los siguientes
//console.log(nombreApellido.replace("Carlos", "Luis"));

//Trim quita los espacios vacíos al principio y al final
//console.log(nombreApellido.trim())

//TrimStart quita epacios vacíos al principio. TrimEnd quita los espacios vacíos al final
//console.log(nombreApellido.trimStart())

//Separación numérica, con el _ es más facil entender los números, pero esto no se muestra al usuario. Es solo a nivel de consola
let numero = prompt("Ingrese un número")

if (numero > 1_000_000) {
    //alert("El número mayor a 1 millón")
} else {
    //alert("El número es menor o igual a 1 millón")
}

//operador de fusión nula (??) le da un parámetro a una variable null o undefined
let colaboradores = [
    {
        rut: '12234444-7', nombre: "María Moralez",
        departamento: "Talento Humano",
        jornada: "Completa",
        fecha_ingreso: "2021-01-16",
        direccion: {
            region: 'Bio-bío',
            comuna: 'Hualpen'
        },
        salario: {
            salario_bruto: 1_500_000,
            retenciones: {
                AFP: 1_200,
                salud: 1_500
            },
            salario_neto: 1_497_300
        }
    },
    { rut: '12334345-8', nombre: "Carlos Lopez" },
    { rut: '12345678-8', nombre: "José Medina", departamento: "Informática" },
    { rut: '12333345-8', nombre: "Carla Perez", departamento: false } //sigue siendo falso (el vacío también) y no le asigna el "servicios generales"

]

console.log(colaboradores)

//la idea en general es poder rellenar datos, para que si faltan algunos, no se quiebre el código por ej
//el ? sirve para obviar un objeto en caso de que no exista en el arreglo para que no genere un error
colaboradores.map(colaborador => {
   //let direccion = colaborador.direccion && colaborador.direccion.region ? colaborador.direccion.region : '-'
    let retencionAFP = colaborador?.salario?.retenciones?.AFP || 0
    console.log("AFP", retencionAFP);
    let direccion = colaborador?.direccion?.region || '-'
    //console.log(direccion)
    colaborador.salario = 2_500_000
    colaborador.departamento = colaborador.departamento ?? "Servicios Generales"
    colaborador.jornada &&= colaborador.jornada.toUpperCase()
    colaborador.fecha_ingreso ||= "2023-01-01"
    return colaborador
})
//console.log(colaboradores)

//operadores logicos de asignación || , &&


