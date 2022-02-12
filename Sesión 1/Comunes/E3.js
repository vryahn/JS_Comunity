/*

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

*/

let arrayKoders = [
    "Fanny Alvarez",
    "Elias Herrera",
    "Kraken Perez Salinas",
    "Clau Rodriguez"
]

let vector = []
vector = arrayKoders.split();
for (let i=0;i<vector.length;i++) document.write(vector[i]+'<br>')

/* NO FUNCIONA AIUDAAAA */