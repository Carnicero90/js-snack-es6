// ESERCIZIO BICICLETTE
const BIKE = document.getElementById('lightest-bike');
const biciclette = [{
  nome: 'Olmo Cybertruck46',
  peso: 43
}, {
  nome: 'Ducati LittleMonster',
  peso: 23
},
{
  nome: 'Predator Racer W+',
  peso: 12
},
{
  nome: 'Graziella Bella',
  peso: 35
},
]

// SORT ITEMS IN BICICLETTE ACCORDING TO ITEM.PESO (ASCENDING ORDER)
biciclette.sort(function (a, b) { return a.peso - b.peso });

// GET OBJECT lightestBike FROM BICICLETTE
let lightestBike = biciclette[0];

// GET VALUES FROM lightestBike
let { nome, peso } = lightestBike;

// PRINT nome, peso INTO index.html
BIKE.innerHTML = `<em>${nome}</em>, con un peso complessivo di ${peso}kg (campanello escluso).`;


// ESERCIZIO SQUADRE CALCIO
const RANKS = document.getElementById('ranks');
const statsSquadre = [
  {
    nomeSquadra: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0,
  }, {
    nomeSquadra: 'Genoa',
    puntiFatti: 0,
    falliSubiti: 0,
  }, {
    nomeSquadra: 'Guaranito',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nomeSquadra: 'Ascoli',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nomeSquadra: 'Brescia',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nomeSquadra: 'Juventus',
    puntiFatti: 0,
    falliSubiti: 0,
  }, {
    nomeSquadra: 'Vicenza',
    puntiFatti: 0,
    falliSubiti: 0,
  }
];

// CHANGE VALUE OF puntiFatti AND falliSubiti FOR EVERY OBJECT IN statsSquadre
statsSquadre.forEach(function (team) {
  team.puntiFatti = getRandomInt(10, 60);
  team.falliSubiti = getRandomInt(1, 110);
});

// CREATE ARRAY updatedStats 
const updatedStats = [];
for (let team of statsSquadre) {
  let {nomeSquadra, falliSubiti} = team;
  let updatedValue = {
    nomeSquadra,
    falliSubiti
  };
  updatedStats.push(updatedValue)
}

// SORT ITEMS IN updatedStats ACCORDING TO ITEM.falliSubiti (DESCENDING ORDER)
updatedStats.sort(function (a, b) { 
  return b.falliSubiti - a.falliSubiti });

// PRINT nomeSquadra, falliSubiti OF EVERY OBJECT IN updatedStats INTO index.html
let rankList = '';

for (let i of updatedStats) {
  rankList += `<li>${i.nomeSquadra}: ${i.falliSubiti}</li>`;

}
RANKS.innerHTML = rankList;


// FUNCTIONS

function getRandomInt(min, max) {
  // RETURN A RANDOM INTEGER BETWEEN min (INCLUDED) AND max (INCLUDED)
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min;
}