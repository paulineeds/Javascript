let a = 3;
let b = 2;

function tripple (x){
  return x*3
}

document.getElementById('button').onclick = function display(){
alert(`${tripple(a)}\n${tripple(b)}`);
}
