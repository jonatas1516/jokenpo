const win = document.querySelector(".winner span");

const playerScore = document.querySelector(".player span");

const cpuScore = document.querySelector(".cpu span");

const drawScore = document.querySelector(".draw span");

const player1 = document.querySelector(".select-player span");

const cpu1 = document.querySelector(".select-cpu span");

let scorePlayer = 0;

let scoreCpu = 0;

let draw = 0;

const choicePlayer = (choicePlayer) => {
  game(choicePlayer, choiceCPU());
};

const choiceCPU = () => {
  const choices = ["pedra", "papel", "tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[`${randomNumber}`];
};

const game = (player, cpu) => {
  choiceTag(player, cpu);
  //console.log("Player: " + `${player}`);
  //console.log("CPU: " + `${cpu}`);

  if (
    (player === "pedra" && cpu === "tesoura") ||
    (player === "papel" && cpu === "pedra") ||
    (player === "tesoura" && cpu === "papel")
  ) {
    win.innerHTML = "Você ganhou";

    scorePlayer++;

    playerScore.innerHTML = `${scorePlayer}`;
  } else if (player === cpu) {
    win.innerHTML = "empatou";

    draw++;

    drawScore.innerHTML = `${draw}`;
  } else {
    win.innerHTML = "CPU ganhou";

    scoreCpu++;

    cpuScore.innerHTML = `${scoreCpu}`;
  }
};

const choiceTag = (player, cpu) => {
  if (player === "pedra") {
    player1.innerHTML = "&#x1f44a;";
  } else if (player === "papel") {
    player1.innerHTML = "&#x1f590;";
  } else {
    player1.innerHTML = "&#x270c;";
  }

  if (cpu === "pedra") {
    cpu1.innerHTML = "&#x1f44a;";
  } else if (cpu === "papel") {
    cpu1.innerHTML = "&#x1f590;";
  } else {
    cpu1.innerHTML = "&#x270c;";
  }
};
