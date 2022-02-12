/*

Ejericicio 2

A partir del ejercicio anterior:

    Crear una funcion que permita saber el nombre de algun koder basado en su numero asignado
    Función que permita imprimir la lista de koders en orden alfabetico descendiente
    Función que permita imprimir

    Crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
  [
      "koder 1: Roberto Garza Hernández (R. G. H.)"
      "koder 2: Vic Cosme (V. C.)"
      "koder 3: Jess Vargass (J. V.)"
  ]

    Función que permita agregar un koder en alguna posicion deseada, por ejemplo: "Aldahir Mayorga Garcia, lugar 2"

*/

let koders = ['Paquito','Aldahir','Vic','Bryan'];

koders.sort();

function imprimirordenada () {
  document.write('Lista ordenada de Koders: <br><br>')
  for(let i=0;i<cantidad;i++) document.write('Koder ',i+1,': ',koders[i],'<br>')
}

// NO ME SALE, AIUDAAAAAAAA