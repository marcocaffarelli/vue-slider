// Istruzioni:
// Ricreare lo slider di immagini ma questa volta con Vue
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
        //creato un contatore che rappresenta l'indice dell'array
        contatore: 0,
        
    },  

    methods: {
        //cliccando sull'i figlia di next
        avanti(){
           //cliccando sull' i aumento il valore dell'index e quindi cambio immagine 
           (this.contatore == this.immagini.length - 1) ? this.contatore = 0 : this.contatore++
        },
        //cliccando sull'i figlia di prev
        indietro(){
           //cliccando sull' i diminuisco il valore dell'index e quindi cambio immagine 
           (this.contatore == 0) ? this.contatore = this.immagini.length -1 : this.contatore--
        }
    }
});

