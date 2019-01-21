const n = "10"
const x = "beenhouder"
const y = "Suriname"
const z = "kelly"
console.log ("u wordt " + x + "en woont in " + y + ", en bent getrouwd met " + z + " met " + n +" kinderen.")
// --------------------------------------------------------------------------------------

const Jaar = 2019
const Geboorten = 1969
console.log (2019-1969)
// --------------------------------------------------------------------------------------

const MijnLeeftijd = 22
const MaxLeeftijd = 100
console.log ("Je hebt nog steeds " + (MaxLeeftijd - MijnLeeftijd) +" jaar voordat je de leeftijd van " + MaxLeeftijd + " bereikt hebt")
// --------------------------------------------------------------------------------------

const Enkelvoud = "Ezel"
const Getal = 9
const Reslutaat = x
if(Getal>1){
  const Reslutaat = "Ezel"+"s";

  console.log(Reslutaat);
}
// --------------------------------------------------------------------------------------


for (let i = 0; i <101; i++) {

if (i>90){
  console.log("voor " + i + " Punten heb je een A")
} else if (i>80){
    console.log("voor " + i + " Punten heb je een B")
} else if (i>70){
    console.log("voor " + i + " Punten heb je een C")
} else if (i>60){
    console.log("voor " + i + " Punten heb je een D")
} else {
    console.log("U Failed, loser")
}
}
// ---------------------------------------------------------------------------------------

for (let i = 0; i <20; i++) {
  if (i%2==0) {
    console.log(i + " is even")
  } else if (i%2!==0){
    console.log(i + " is oneven")
  }
}
// -------------------------------WERKT NIET------------------------------------------------

  var increment = 0;
  while (increment <=10) {
      console.log(increment*9);
      increment = increment + 1;
  }
// -------------------WERKT NIET------------------------------------------------------------

var increment = 0;
while (increment !== 10 ) {

    console.log(increment);
    increment = increment + 1;
}
// ------------------------------------------------------------------------------------------

var p = min(100, 3);
function min(a, b) {
  return a-b;
}
console.log(p)

// -----------------------------------------------------------------------------------------

var p = delen(67, 3);
function delen(a, b) {
  return a / b;
}
console.log(p);
// -----------------------------------------------------------------------------------------

var p = multi(29,6);
function multi(a,b) {
  return a*b;
}
console.log(p);
// ----------------------------------------WERKT NIET----------------------------------------

var p = procent(10,50);
function procent (a,b) {
  return (10/100)*50;
}
console.log(p);
// -----------------------------------------------------------------------------------------
//ARRAYS

let cijfers =[1,2,3,4,5,6,7,8,9]
  let sum = 0
  cijfers.forEach(cijfers => sum+=cijfers)
  console.log(sum)
// ----------------------------------------------------------------------------------------

const acteurs =["Johny Depp", "Jude Law", "Kit Harington"];
console.log("de eerste is "+ acteurs[1]);
console.log("de tweede is "+ acteurs [0]);
console.log("de derde is "+acteurs[2]);
// -----------------------------------------------------------------------------------------

const galaxy = ["mario", "luigi", "peach"];
galaxy.push("bowser");
console.log(galaxy);
// ----------------------------------------------------------------------------------------
//MATH

let m = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(m);
// ----------------------------------------------------------------------------------------

let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(max);
// ---------------------------------------------------------------------------------------

let optellen = (m+max);
console.log(optellen);
// ---------------------------------------------------------------------------------------

let floatSpeed = (10.4);
let lowSpeed= Math.floor(floatSpeed);
console.log(lowSpeed);
let highSpeed= Math.ceil(floatSpeed);
console.log(highSpeed);
// ---------------------------------------------------------------------------------------
console.log(Math.floor((Math.random() * 51) + 50));

// ---------------------------------------------------------------------------------------

let random = Math.random();
console.log(random);
// ---------------------------------------------------------------------------------------

let totTien= Math.floor(Math.random() * 11);
console.log(totTien);
// ---------------------------------------------------------------------------------------

let names = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var randomIndex = Math.floor(Math.random() * names.length);
var randomElement = names[randomIndex];
console.log(randomElement);
// ---------------------------------------------------------------------------------------
//OBJECTS
let character = {
  naam: "Pauline",
  age: 22,
  items_to_give: ["een","twee","drie"],
};
for(let key in character){
  console.log(character[key]);
}
var randomIndex = Math.floor(Math.random() * character.items_to_give.length);
var randomElement = character.items_to_give[randomIndex];
console.log(randomElement);
// ----------------------------I DONT KNOWWWWWWWW---------------------------------------------

let teKoop = ["zwaard", "bijl", "scepter"];
function Skills (title, physic, magic, minLevel, available) {

}
console.log(Skills);
// --------------------------------------------------------------------------------------------
