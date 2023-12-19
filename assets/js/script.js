const win = document.querySelector(".winner span");

const playerScore = document.querySelector(".player span");

const cpuScore = document.querySelector(".cpu span");

const drawScore = document.querySelector(".draw span");

const player1 = document.querySelector(".select-player span");

const cpu1 = document.querySelector(".select-cpu span");

let scorePlayer = 0;

let scoreCpu = 0;

let draw = 0;

const GAME_OPTIONS = {
  STONE: "stone",
  PAPER: "paper",
  SCISSOR: "scissor",
};

const choicePlayer = (choicePlayer) => {
  game(choicePlayer, choiceCPU());
};

const choiceCPU = () => {
  const choices = [
    GAME_OPTIONS.STONE,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSOR,
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[`${randomNumber}`];
};

const game = (player, cpu) => {
  choiceTag(player, cpu);
  //console.log("Player: " + `${player}`);
  //console.log("CPU: " + `${cpu}`);

  if (
    (player === GAME_OPTIONS.STONE && cpu === GAME_OPTIONS.SCISSOR) ||
    (player === GAME_OPTIONS.PAPER && cpu === GAME_OPTIONS.STONE) ||
    (player === GAME_OPTIONS.SCISSOR && cpu === GAME_OPTIONS.PAPER)
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
  if (player === GAME_OPTIONS.STONE) {
    player1.innerHTML = "&#x1f44a;";
  } else if (player === GAME_OPTIONS.PAPER) {
    player1.innerHTML = "&#x1f590;";
  } else {
    player1.innerHTML = "&#x270c;";
  }

  if (cpu === GAME_OPTIONS.STONE) {
    cpu1.innerHTML = "&#x1f44a;";
  } else if (cpu === GAME_OPTIONS.PAPER) {
    cpu1.innerHTML = "&#x1f590;";
  } else {
    cpu1.innerHTML = "&#x270c;";
  }
};
