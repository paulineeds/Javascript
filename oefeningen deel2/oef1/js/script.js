
document.getElementById('firstbutton').onclick= function surfaceRectangle(){
  let breedte= prompt ('wat is de breedte?');
  let lengte= prompt ('wat is de lengte?');
alert(breedte*lengte);
}

// document.getElementById('secondbutton').onclick= function perimeterRectangle() {
//   let breedte = prompt('wat is de breedte?');
//   let lengte = prompt('wat is de lengte?');
//   alert(`De omtrek is ${(breedte + lengte) * 2}`);
// }

document.getElementById("secondbutton").onclick = function perimeterRectangle() {
  let width = prompt("breedte?");
  let height = prompt("hoogte?");
  alert(`De omtrek is ${(width*2)+(height*2) }`)
};
