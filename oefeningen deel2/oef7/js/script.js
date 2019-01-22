const makeChoice = () => {
  let x =prompt("1,2,3?")
  switch(x) {
    case "1":
    alert("1.Thank you")
    break

    case "2":
    alert("2. Hello")
    break

    case "3":
    alert("3. Goodbye")
    break

    default:
    alert("Excuse me, what do you want?")
  }

}
