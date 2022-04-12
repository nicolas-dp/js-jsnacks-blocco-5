/* SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const letterArray = ["a", "b", "c"];
const numberArray = [1, 2, 3];
let newArray = [];


/* CON IL CICLO FOR*/
/* if (letterArray.length == numberArray.length) {
    for (let i = 0; i < letterArray.length; i++) {
        const elementLetterArray = letterArray[i];
        const elementNumberArray = numberArray[i]
        newArray.push(elementLetterArray, elementNumberArray)
    }
} else {
    alert("I due array non hanno la stessa lunghezza")
}


console.log(newArray); */


/* CON IL CICLO FOR-EACH */

if (letterArray.length == numberArray.length) {
    letterArray.forEach((element, index) => {
        newArray.push(element)
        newArray.push(numberArray[index])

    });
} else {
    alert("I due array non hanno la stessa lunghezza")
}

console.log(newArray);
