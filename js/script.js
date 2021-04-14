// $(document).ready()
// Scusate ma oggi pomeriggio sono un poco incasinato, non so quando riesco a riordinare, semplificare, migliorare, etceterare da questo primo commit
const bikeHtml = document.getElementById('lightest-bike');
const biciclette = [{
  nome: "olmo",
  peso: 43
}, {
  nome: "ducati",
  peso: 23
},
{
  nome: "truck",
  peso: 12
},
{
  nome: "graziella",
  peso: 35
},
]

// SORT ITEMS IN BICICLETTE ACCORDING TO ITEM.PESO (ASCENDING ORDER)
biciclette.sort(function (a, b) { return a.peso - b.peso });

let lightestBike = biciclette[0];
let { nome, peso } = lightestBike;
bikeHtml.innerHTML = `${nome}, con un peso di ${peso}kg.`;



const statsSquadre = [
  {
    "nome_squadra": 'Milan',
    "punti_fatti": 0,
    "falli_subiti": 0,
  }, {
    "nome_squadra": 'Genoa',
    "punti_fatti": 0,
    "falli_subiti": 0,
  }, {
    "nome_squadra": 'Guaranito',
    "punti_fatti": 0,
    "falli_subiti": 0,
  },
  {
    "nome_squadra": 'Ascoli',
    "punti_fatti": 0,
    "falli_subiti": 0,
  },
  {
    "nome_squadra": 'Brescia',
    "punti_fatti": 0,
    "falli_subiti": 0,
  },
  {
    "nome_squadra": 'Juventus',
    "punti_fatti": 0,
    "falli_subiti": 0,
  }, {
    "nome_squadra": 'Vicenza',
    "punti_fatti": 0,
    "falli_subiti": 0,
  }
];

statsSquadre.forEach(function (team) {
  team.punti_fatti = getRandomInt(10, 60);
  team.falli_subiti = getRandomInt(1, 110);
});

const updatedStats = [];
for (let team of statsSquadre) {
  let {nome_squadra, falli_subiti} = team;
  let updatedValue = {
    nome_squadra,
    falli_subiti
  };
  updatedStats.push(updatedValue)
}
// statsSquadre.forEach(function (item) {
//   let { nome_squadra, falli_subiti } = item;
//   updatedStats.push({
//     nome_squadra,
//     falli_subiti
//   })
// })


updatedStats.sort(function (a, b) { 
  return b.falli_subiti - a.falli_subiti });

let rankList = '';

for (let i of updatedStats) {
  rankList += `<li>${i.nome_squadra}: ${i.falli_subiti}</li>`;

}
document.getElementById('scores').innerHTML = rankList;

function getRandomInt(min, max) {
  // RETURN A RANDOM INTEGER BETWEEN min (INCLUDED) AND max (INCLUDED)
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
}