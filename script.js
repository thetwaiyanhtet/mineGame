var mine1;
var m1p1;
var m1p2;
var m1p3;
var m1p4;
var m1p5;
var m1p6;
var m1p7;
var m1p8;

var mine2;
var m2p1;
var m2p2;
var m2p3;
var m2p4;
var m2p5;
var m2p6;
var m2p7;
var m2p8;
var clickCount = 0;
var gameFinished = false;

function buildMine() {
  var row1 = Math.floor(Math.random() * 6 + 1);
  var col1 = Math.floor(Math.random() * 6 + 1);
  mine1 = row1 + "" + col1;

  m1p1 = row1 - 1 + "" + (col1 - 1);
  m1p2 = row1 - 1 + "" + col1;
  m1p3 = row1 - 1 + "" + (col1 + 1);
  m1p4 = row1 + "" + (col1 - 1);
  m1p5 = row1 + "" + (col1 + 1);
  m1p6 = row1 + 1 + "" + (col1 - 1);
  m1p7 = row1 + 1 + "" + col1;
  m1p8 = row1 + 1 + "" + (col1 + 1);

  var row2 = Math.floor(Math.random() * 6 + 1);
  var col2 = Math.floor(Math.random() * 6 + 1);
  mine2 = row2 + "" + col2;

  m2p1 = row2 - 1 + "" + (col2 - 1);
  m2p2 = row2 - 1 + "" + col2;
  m2p3 = row2 - 1 + "" + (col2 + 1);
  m2p4 = row2 + "" + (col2 - 1);
  m2p5 = row2 + "" + (col2 + 1);
  m2p6 = row2 + 1 + "" + (col2 - 1);
  m2p7 = row2 + 1 + "" + col2;
  m2p8 = row2 + 1 + "" + (col2 + 1);

  if (mine1 == mine2) {
    var row2 = Math.floor(Math.random() * 6 + 1);
    var col2 = Math.floor(Math.random() * 6 + 1);
    mine2 = row2 + "" + col2;
  }
  console.log(mine1);
  console.log(mine2);
}
function pressBtn(cell) {
  if (gameFinished == false) {
    clickCount++;
    cell.style.pointerEvents = "none";
    var userClick = Number(cell.id);

    if (userClick == mine1 || userClick == mine2) {
      cell.style.backgroundColor = "red";
      cell.innerText = "Boom";
      gameover();
      document.getElementById("gameOver").play();
    } else if (
      userClick == m1p1 ||
      userClick == m1p2 ||
      userClick == m1p3 ||
      userClick == m1p4 ||
      userClick == m1p5 ||
      userClick == m1p6 ||
      userClick == m1p7 ||
      userClick == m1p8 ||
      userClick == m2p1 ||
      userClick == m2p2 ||
      userClick == m2p3 ||
      userClick == m2p4 ||
      userClick == m2p5 ||
      userClick == m2p6 ||
      userClick == m2p7 ||
      userClick == m2p8
    ) {
      cell.style.backgroundColor = "red";
      cell.innerText = mineAround(userClick);
      document.getElementById("clickSound").play();
    } else {
      cell.style.backgroundColor = "teal";
      document.getElementById("clickSound").play();
    }
  }
  if (clickCount == 34) {
    gameWin();
    document.getElementById("gameWin").play();
  }
}
function gameover() {
  gameFinished = true;
  for (let index = 0; index < 36; index++) {
    document.getElementsByClassName("cells")[index].style.backgroundColor ="red";
    document.getElementsByClassName("cells")[index].innerText = "";
  }
  document.getElementById("32").innerText = "G";
  document.getElementById("33").innerText = "A";
  document.getElementById("34").innerText = "M";
  document.getElementById("35").innerText = "E";

  document.getElementById("42").innerText = "O";
  document.getElementById("43").innerText = "V";
  document.getElementById("44").innerText = "E";
  document.getElementById("45").innerText = "R";
}
function gameWin() {
  gameFinished = true;
  for (let index = 0; index < 36; index++) {
    document.getElementsByClassName("cells")[index].style.backgroundColor ="teal";
    document.getElementsByClassName("cells")[index].innerText = "";
  }
  document.getElementById("32").innerText = "G";
  document.getElementById("33").innerText = "A";
  document.getElementById("34").innerText = "M";
  document.getElementById("35").innerText = "E";

  document.getElementById("42").innerText = "W";
  document.getElementById("43").innerText = "I";
  document.getElementById("44").innerText = "N";
  document.getElementById("45").innerText = "!";
}
function mineAround(userClick) {
  var count = 0;
  if (
    userClick == m1p1 ||
    userClick == m1p2 ||
    userClick == m1p3 ||
    userClick == m1p4 ||
    userClick == m1p5 ||
    userClick == m1p6 ||
    userClick == m1p7 ||
    userClick == m1p8
  ) {
    count++;
  }
  if (
    userClick == m2p1 ||
    userClick == m2p2 ||
    userClick == m2p3 ||
    userClick == m2p4 ||
    userClick == m2p5 ||
    userClick == m2p6 ||
    userClick == m2p7 ||
    userClick == m2p8
  ) {
    count++;
  }
  return count;
}
