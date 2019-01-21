let name = document.getElementById('name');
let firstName = document.getElementById('firstName');
let city= document.getElementById('city');

document.getElementById("validate").onclick = function getUserInput() {
    alert(`Name:  ${name.value}\nFirstname: ${firstName.value}\nCity:   ${city.value}`  );
}
