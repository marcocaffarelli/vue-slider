// Istruzioni:
// Ricreare lo slider di immagini ma questa volta con Vue
// Bonus ufficiale:
// Facciamo in modo che il nostro slider scorra automaticamente in avanti,
// e ogni 3 secondi visualizzi un immagine differente.
// Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata.
// Possibili extra Bonus:
// cliccando sui pallini visualizzeremo l'immagine corrispondente
// cliccando sulle frecce della tastiera sinista e destra scorriamo tra le immagini
// I bonus metteteli in una cartella "bonus".

let app = new Vue({
    el: "#app", 
    data: {
        //array di immagini
        immagini: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
        ],
        //creato un index che rappresenta l'indice dell'array
        index: 0,

        pallini: [
            "",
            "",
            "",
            "active",
        ],
    },  

    methods: {
        //cliccando sull'i figlia di next
        avanti(){
           //cliccando sull' i aumento il valore dell'indice e quindi cambio immagine 
           (this.index == 3) ? this.index = 0 : this.index++
        },
        //cliccando sull'i figlia di prev
        indietro(){
           //cliccando sull' i diminuisco il valore dell'indice e quindi cambio immagine 
           (this.index == 0) ? this.index = 3 : this.index--
        }
    }
});

