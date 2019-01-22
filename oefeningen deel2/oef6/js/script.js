let tab = [-2,1,4];

let x = prompt('wat is x?')
const subtract = (x,y)  => x-y;

  if ( subtract(x,tab[0]) >= 0) {
    alert("getal positief")
  } else {
    alert("getal negatief")
  }


const display = () => {
  alert(subtract(x,tab[0])), alert(subtract(x,tab[tab.length-1]))
}
