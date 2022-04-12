/* SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */



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

//Zucchine lunghe massimo 14cm
const zucchine_under_15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15 )
console.log(zucchine_under_15);

//Zucchine lunghe da 15cm in poi
const zucchine_over_15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15 )
console.log(zucchine_over_15);


//somma del peso per il gruppo di zucchine inferiori a 15cm
//Dichiato e inizializzo variabile somma
let somma_under_15 = 0;
zucchine_under_15.forEach((zucchina) => {
    somma_under_15 += zucchina.peso
})
console.log(`La somma del peso per il secondo gruppo è: ${somma_under_15} grammi`);

//somma del peso per il gruppo di zucchine maggiori a 15cm
//Dichiato e inizializzo variabile somma
let somma_over_15 = 0;
zucchine_over_15.forEach((zucchina) => {
    somma_over_15 += zucchina.peso
})
console.log(`La somma del peso per il secondo gruppo è: ${somma_over_15} grammi`);




