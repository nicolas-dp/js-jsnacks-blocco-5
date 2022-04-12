/* SNACK 3 
Scrivi una funzione che accetti una s
tringa come argomento e la ritorni girata (es. Ciao -> oaiC)
 */

let word = prompt("Inserisci la parola che vuoi invertire")

function reverseWord(word) {
    let splitString = word.split(""); 
    //Usa il metodo reverse() per invertire l'array appena creato
    let reverseArray = splitString.reverse();
    //Usa il metodo join() per unire tutti gli elementi della stringa in un array
    let joinArray = reverseArray.join("");
    //Restituisci la stringa invertita
    return joinArray;
}


console.log(reverseWord(word));

