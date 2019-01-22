const testWhile = () => {

  let ietsMetP = prompt("he een p-woord!");

    while (!ietsMetP.includes("p")) {
      ietsMetP = prompt("he een p-woord!");
    }

    alert(ietsMetP);

  }
