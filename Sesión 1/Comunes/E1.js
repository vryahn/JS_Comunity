/*

Ejercicio 1:

Crear funcion que permita indicar la cantidad de koders a guardar, que pida tantos nombre
completos de koders como se haya indicado, y que imprima el nombre del koder y su numero
asignado.

Ejemplo:

input

    Roberto Garza
    Vic Cosme
    Jess Vargas

output:

    koder 1: Roberto Garza Hernández
    koder 2: Vic Cosme
    koder 3: Jess Vargas

*/

let cantidad

cantidad = prompt('Ingrese cantidad de Koders: ')

let koders = [cantidad];

for(let i=0;i<cantidad;i++) koders[i] = prompt('Ingresa nombre: ')

for(let i=0;i<cantidad;i++) document.write('Koder ',i+1,': ',koders[i],'<br>')