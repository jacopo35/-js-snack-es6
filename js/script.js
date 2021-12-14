/*
Consegna:
Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

let arrayNames = ['Jacopo', 'Giada', 'Riccardo', 'Luca', 'Barbara', 'Enrico'];

let a = 2;
let b = 5;

console.log('Array originale: ' + arrayNames);
console.log('a: ' + a + ' , b: ' + b);

let arrayNew = getNames(arrayNames, a, b);
console.log('Array nuovo: ' + arrayNew);

function getNames(array, num1, num2) {
    let arrayNew = array.filter((element, index) => {
        return index >= num1 && index <= num2;
    });
    return arrayNew;
}
