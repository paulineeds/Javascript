const weekday = () => {
  let day = new Date().getDay()
  switch (day){
    case 0:
    alert( "zondag")
    break
    case 1:
    alert("maandag")
    break
    case 2:
    alert("dinsdag")
    break
    case 3:
    alert("woensdag");
    break;
    case 4:
    alert("donderdag");
    break;
    case 5:
    alert ("vrijdag");
    break;
    case 6:
    alert ("zaterdag");
    break;
    default:
    alert("WTF");
  }
}
