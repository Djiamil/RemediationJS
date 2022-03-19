const h1jour = document.querySelector('.h1jour');
const h1heur = document.querySelector('.h1heur');
const h1munute = document.querySelector('.h1munute');
const h1seconde = document.querySelector('.h1seconde');



function countReboure(){
const now = new Date().getTime();
const countdownDate = new Date ('January 1 23').getTime();
const distancesBase = countdownDate - now;
const days = Math.floor(distancesBase / (1000*60*60*24));
const hours = Math.floor((distancesBase % (1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distancesBase % (1000*60*60)) /(1000*60));
const seconds = Math.floor((distancesBase % (1000*60)) / 1000);


// text.innerText = `${days}JOURS ${hours}h ${minutes}m ${seconds}s`;
h1jour.innerText = `${days}`;
h1heur.innerText = `${hours}`;
h1munute.innerText = `${minutes}`;
h1seconde.innerText = `${seconds}`;

}



const countDownInterval = setInterval(() => {
    countReboure();
},1000);