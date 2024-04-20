var timer = 60;
var hit = 0;
var score = 0;

function sethcore() {
  var csore = Number(document.querySelector("#hscore").textContent);
  if (csore < score) {
    document.querySelector("#hscore").textContent = score;
  }
}

function resstscore() {
  document.querySelector("#score").textContent = 0;
}
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function hitval() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hit;
}

function makebubble() {
  var cluster = "";

  for (i = 1; i <= 161; i++) {
    var rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbot").innerHTML = cluster;
}

function timerint() {
  var timerval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerval);
      sethcore();
      document.querySelector("#pbot").innerHTML = "";
    }
  }, 1000);
}

document.querySelector("#pbot").addEventListener("click", function (dets) {
  var clickecd = Number(dets.target.textContent);
  if (clickecd === hit) {
    increaseScore();
    hitval();
    makebubble();
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  timer = 60;
  score = 0;
  resstscore();
  timerint();
  makebubble();
});

hitval();
timerint();
makebubble();
