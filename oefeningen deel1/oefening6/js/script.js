let first = document.getElementById('firstNumber');
let second = document.getElementById('secondNumber');

document.getElementById('validate').onclick = function getUserInput(){
  alert(first.value % second.value);
}
