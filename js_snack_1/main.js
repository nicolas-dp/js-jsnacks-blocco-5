/* Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */



const zucchine = [
    {
        varieta: "Zucchino fiorentino",
        peso: 30,
        lunghezza: 5
    },

    {
        varieta: "Zucchina nera",
        peso: 10,
        lunghezza: 15
    },

    {
        varieta: "Zucchino romanesco",
        peso: 2,
        lunghezza: 10
    },

    {
        varieta: "Zucchine tonde",
        peso: 31,
        lunghezza: 4
    },

    {
        varieta: "Zucchine trombetta",
        peso: 22,
        lunghezza: 9
    },

    {
        varieta: "Zucchina pâtisson",
        peso: 17,
        lunghezza: 5
    },

    {
        varieta: "Zucchina Crookneck",
        peso: 10,
        lunghezza: 15
    },

    {
        varieta: "Zucchino rugoso friulano",
        peso: 10,
        lunghezza: 33
    },

    {
        varieta: "Zucchino giallo",
        peso: 4,
        lunghezza: 19
    },

    {
        varieta: "Zucchina napoletana",
        peso: 18,
        lunghezza: 47
    },

]

let somma = 0;

zucchine.forEach((zucchina) => {
    somma += zucchina.peso
});

console.log(`Il peso totale delle zucchine è: ${somma} grammi`);




