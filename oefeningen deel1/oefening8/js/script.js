let age = document.getElementById('age')

document.getElementById('validate').onclick = function getUserInput(){
  if (age.value>=18){
    alert("u bent meerderjarig");
  } else {
    alert("u bent jong");
}}
