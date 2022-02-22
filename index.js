let table = document.getElementById("table");
let rowCount = document.getElementById("row-count");
let columnCount = document.getElementById("column-count");
let winCount = document.getElementById("win-count");
let xx = "x";
let oo = "0";
let winnerX;
let winnerO;
let cheker = 1;
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let play1 = 0;
let play2 = 0;
let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");


function create() {
  table.innerHTML = "";
  cheker = 1;
  let x = Number(rowCount.value);
  let y = Number(columnCount.value);
  let z = Number(winCount.value);

  winnerX = xx.padEnd(z, "x");
  winnerO = oo.padEnd(z, "0");

  for (let i = 0; i < x; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "row");
    table.appendChild(div);

    let row = document.getElementsByClassName("row");

    for (let j = 0; j < y; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", `column row-${i} col-${j}`);
      div.setAttribute("onclick", "chekWinner(event)");
      row[i].appendChild(div);
    }

    let columnAll = document.getElementsByClassName("column");
    for (let i = 0; i < columnAll.length; i++) {
      columnAll[i].innerHTML = "a";
    }
  }

  if (rowCount > columnCount) {
    for (let i = Number(columnCount.value) - 1; i >= 0; i--) {
      let xxx = document.getElementsByClassName(`row-${i}`);

      let z = Number(rowCount.value) + i;
      for (let j = 0; j < Number(columnCount.value); j++) {
        xxx[j].classList.add(`lr-${z - j}`);
      }
    }
  } else {
    for (let i = Number(rowCount.value) - 1; i >= 0; i--) {
      let xxx = document.getElementsByClassName(`row-${i}`);

      let z = Number(columnCount.value) + i;
      for (let j = 0; j < Number(columnCount.value); j++) {
        xxx[j].classList.add(`lr-${z - j}`);
      }
    }
  }

  /******************************** */

  if (rowCount > columnCount) {
    for (let i = 0; i < Number(columnCount.value); i++) {
      let xxx = document.getElementsByClassName(`row-${i}`);

      for (let j = 0; j < Number(rowCount.value); j++) {
        xxx[j].classList.add(`rl-${i + j}`);
      }
    }
  } else {
    for (let i = 0; i < Number(rowCount.value); i++) {
      let xxx = document.getElementsByClassName(`row-${i}`);

      for (let j = 0; j < Number(columnCount.value); j++) {
        xxx[j].classList.add(`rl-${i + j}`);
      }
    }
  }

  /************************************ */
}

let winner = "x";

function chekWinner(event) {
  if(winner === "x") {
    if (cheker % 2 === 0) {
      event.target.innerHTML = "0";
      event.target.style.backgroundImage = "url(circle.png)";
    } else {
      event.target.innerHTML = "x";
      event.target.style.backgroundImage = "url(cross.png)";
    }
  } else {
    if (cheker % 2 === 0) {
      event.target.innerHTML = "x";
      event.target.style.backgroundImage = "url(circle.png)";
    } else {
      event.target.innerHTML = "0";
      event.target.style.backgroundImage = "url(cross.png)";
    }
  }
  

  event.target.removeAttribute("onclick");

  cheker++;

  //chek row

  let rowArray = [];
  let colArray = [];
  let lrArray = [];
  let rlArray = [];

  for (let i = 0; i < Number(rowCount.value); i++) {
    let columns = document.getElementsByClassName(`row-${i}`);
    console.log(columns.length);
    for (j = 0; j < columns.length; j++) {
      str = columns[j].innerHTML;
      rowArray[j] = rowArray[j] + str;
    }
  }

  console.log(rowArray);

  for (let i = 0; i < Number(columnCount.value); i++) {
    let rows = document.getElementsByClassName(`col-${i}`);
    for (j = 0; j < rows.length; j++) {
      str = rows[j].innerHTML;
      colArray[j] = colArray[j] + str;
    }
  }

  console.log(colArray);

  for (let i = 1; i < Number(rowCount.value) + 3; i++) {
    let lr = document.getElementsByClassName(`lr-${i}`);
    console.log(lr.length);
    for (let j = 0; j < lr.length; j++) {
      str = lr[j].innerHTML;
      lrArray[i - 1] = lrArray[i - 1] + str;
    }
  }

  console.log(lrArray);

  for (let i = 0; i < Number(rowCount.value) + 2; i++) {
    let rl = document.getElementsByClassName(`rl-${i}`);
    console.log(rl.length);
    for (let j = 0; j < rl.length; j++) {
      str = rl[j].innerHTML;
      rlArray[i] = rlArray[i] + str;
    }
  }

  console.log(rlArray);

  for (let i = 0; i < rowArray.length; i++) {
    if (rowArray[i].indexOf(winnerX) > -1) {
      play1++;
      player1.innerHTML = play1;
      removeClick();
      player1.style.borderBottom = "5px solid green";
      player2.style.borderBottom = "5px solid red";
      pl1.setAttribute("src","cross.png");
      pl2.setAttribute("src","circle.png");
      winner = "x";
    } else if (rowArray[i].indexOf(winnerO) > -1) {
      play2++;
      player2.innerHTML = play2;
      removeClick();
      player2.style.borderBottom = "5px solid green";
      player1.style.borderBottom = "5px solid red";
      pl2.setAttribute("src","cross.png");
      pl1.setAttribute("src","circle.png");
      winner = "0";
    }
  }

  for (let i = 0; i < colArray.length; i++) {
    if (colArray[i].indexOf(winnerX) > -1) {
      play1++;
      player1.innerHTML = play1;
      removeClick();
      player1.style.borderBottom = "5px solid green";
      player2.style.borderBottom = "5px solid red";
      pl1.setAttribute("src","cross.png");
      pl2.setAttribute("src","circle.png");
      winner = "x";
    } else if (colArray[i].indexOf(winnerO) > -1) {
      play2++;
      player2.innerHTML = play2;
      removeClick();
      player2.style.borderBottom = "5px solid green";
      player1.style.borderBottom = "5px solid red";
      pl2.setAttribute("src","cross.png");
      pl1.setAttribute("src","circle.png");
      winner = "0";
    }
  }

  for (let i = 0; i < lrArray.length; i++) {
    if (lrArray[i].indexOf(winnerX) > -1) {
      play1++;
      player1.innerHTML = play1;
      removeClick();
      player1.style.borderBottom = "5px solid green";
      player2.style.borderBottom = "5px solid red";
      pl1.setAttribute("src","cross.png");
      pl2.setAttribute("src","circle.png");
      winner = "x";
    } else if (lrArray[i].indexOf(winnerO) > -1) {
      play2++;
      player2.innerHTML = play2;
      removeClick();
      player2.style.borderBottom = "5px solid green";
      player1.style.borderBottom = "5px solid red";
      pl2.setAttribute("src","cross.png");
      pl1.setAttribute("src","circle.png");
      winner = "0";
    }
  }

  for (let i = 0; i < rlArray.length; i++) {
    if (rlArray[i].indexOf(winnerX) > -1) {
      play1++;
      player1.innerHTML = play1;
      removeClick();
      player1.style.borderBottom = "5px solid green";
      player2.style.borderBottom = "5px solid red";
      pl1.setAttribute("src","cross.png");
      pl2.setAttribute("src","circle.png");
      winner = "x";
    } else if (rlArray[i].indexOf(winnerO) > -1) {
      play2++;
      player2.innerHTML = play2;
      removeClick();
      player2.style.borderBottom = "5px solid green";
      player1.style.borderBottom = "5px solid red";
      pl2.setAttribute("src","cross.png");
      pl1.setAttribute("src","circle.png");
      winner = "0";
    }
  }
}


let cubes = document.getElementsByClassName("column");

function removeClick() {
  for(let i = 0; i < cubes.length; i++) {
    cubes[i].removeAttribute("onclick");
  }
}

function restart() {
  create();
}

window.onbeforeunload = function (event) {
  return confirm("If You reload page all data will be lost!")
}

