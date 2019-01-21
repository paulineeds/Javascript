let height = document.getElementById('height');
let date = document.getElementById('birthdate');



document.getElementById('validate').onclick = function getUserInput(){
alert((height.value *2+5)*50-date.value+1766);
}
