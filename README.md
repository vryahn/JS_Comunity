# JS_Comunity

Ejercicio 1:

Crear funcion que permita indicar la cantidad de koders a guardar, que pida tantos nombre completos de koders como se haya indicado, y que imprima el nombre del koder y su numero asignado.

Ejemplo:

input

    Roberto Garza
    Vic Cosme
    Jess Vargas

output:

    koder 1: Roberto Garza Hernández
    koder 2: Vic Cosme
    koder 3: Jess Vargas

Ejericicio 2

A partir del ejercicio anterior:

    Crear una funcion que permita saber el nombre de algun koder basado en su numero asignado
    Función que permita imprimir la lista de koders en orden alfabetico descendiente
    Función que permita imprimir Crear una nueva lista que contenga los nombres de los koders con la siguiente estructura

  [
      "koder 1: Roberto Garza Hernández (R. G. H.)"
      "koder 2: Vic Cosme (V. C.)"
      "koder 3: Jess Vargass (J. V.)"
  ]

    función que permita agregar un koder en alguna posicion deseada, por ejemplo: "Aldahir Mayorga Garcia, lugar 2"

Ejercicio 3

Con métodos de array lograr lo siguiente:

Input:

const arrayKoders = [
        "Fanny Alvarez",
        "Elias Herrera",
        "Kraken Perez Salinas",
        "Clau Rodriguez"
    ]

Output:

[
    ["Fanny", "Alvarez"],
    ["Elias", "Herrera"],
    ["Kraken", "Perez", "Salinas"],
    ["Clau", "Rodriguez"]
]

Ejercicio 4:

    Crear una Funcion que regrese un numero aleatorio desde 0 hasta la longitud de un array que reciba como parametro
    Una vez que creada la función anterior crear una Funcion que reciba el número aletorio y regrese el item correspondiente de un arreglo

let arrayNames = [
  "Fanny Alvarez",
   "Elias Herrera",
   "jess Vargas"
  ]

Ejercicio 5:

Crear una función que reciba un array, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado
Ejercicio 6:

Crear una Función que me permita ingresar el nombre de un array, y contar cuántos items tiene, si el array no existe, debe enviar un prompt que diga "tu array no existe"
Métodos funcionales de array
Ejercicio 1

Input:

let dataArray = [
  ["Fernanda", "Palacios"],
  ["Alfred", "Altamirano"],
  ["Angel", "Resendiz"],
  ["Elda", "Corona"],
  ["Tux", "Tuxtla"],
  ["Jorge", "De Buen"]
]

Output:

 arrayMentor = [
    {
         name: "Fernanda",
         lastName: "Palacios"
     },
    {
        name: "Aldo",
        lastName: "Aldaco"
     },
     ...,
     {...}
 ]

Ejericicio 2

Teniendo la siguiente data:

    Obtener el score promedio de cada materia (HTML, CSS, JS)
    Obtener el promedio indivual de cada mentor
    Crear un array de string con la siguiente forma: "Mi nombre es {name} y mi promedio es {promedio}"
    Obtener la lista de mentores cuyo promedio sea mayor a 9.5
    Obtener el score promedio de cada materia (HTML, CSS, JS)

let mentorsArray = [
    {
         name: "Aldo Aldaco",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                 signature:  "CSS",
                 score: 10
             },
             {
                 signature:  "JS",
                 score: 9
             },
         ]
     },
     {
         name: "Joshua González",
        scores: [
             {
                 signature:  "HTML",
                 score: 10
            },
             {
                 signature:  "CSS",
                 score: 9
             },
             {
                 signature:  "JS",
                score: 10
             },
         ]
     },
     {
         name: "Luis Rodriguez",
         scores: [
             {
                 signature:  "HTML",
                score: 9
             },
            {
                 signature:  "CSS",
                score: 10
             },
            {
                 signature:  "JS",
                 score: 10
             },
         ]
    },
     {
         name: "Alfredo Pizaña",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                signature:  "CSS",
                 score: 8
             },
             {
                 signature:  "JS",
                 score: 10
             },
         ]
     },
     {
         name: "Fernanda Palacios",
         scores: [
             {
                 signature:  "CSS",
                 score: 9
             },
             {
                 signature:  "JS",
                 score: 10
             },
             {
                signature:  "HTML",
                 score: 10
             },
         ]
     }
 ]
 
 
 Fuente: https://gist.github.com/EveFer/508433e44650d5f14789fcbcbe271a2b
