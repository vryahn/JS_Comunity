/*

Ejercicio 4:

    Crear una Funcion que regrese un numero aleatorio desde 0 hasta la longitud de un array que
    reciba como parametro
    Una vez que creada la función anterior crear una Funcion que reciba el número aletorio y
    regrese el item correspondiente de un arreglo

let arrayNames = [
  "Fanny Alvarez",
   "Elias Herrera",
   "jess Vargas"
  ]

*/

tamaño = prompt('Indique cantidad de elementos del arreglo: ')

let vector = [tamaño]
let min = 0
let random

function aleatoriedad () {
  random = parseInt(Math.random() * (tamaño - 0) + 0)
}

for(let i=0;i<tamaño;i++) vector[i] = prompt('Ingresa nombre: ')

aleatoriedad();
document.write('Numero aleatorio: ',random,'<br>Es el índice de: ',vector[random])

