function initializeGame() {
  const startGame = new Promise((resolve, _reject) => {
    console.log("Starting Game...");
    setTimeout(() => {
      resolve("Started Game");
    }, 400);
  });
  const initPlayers = new Promise((resolve, _reject) => {
    console.log("Initializing Players...");
    setTimeout(() => {
      resolve("Initialized Players");
    }, 200);
  });
  const creatingEnemies = new Promise((resolve, _reject) => {
    console.log("Creating Enemies...");
    setTimeout(() => {
      resolve("Created Enemies");
    }, 500)
  });

  Promise.all([startGame, initPlayers, creatingEnemies]).then((messages) => {
    messages.forEach((x) => console.log(x));
    console.log("Initialized Game");
  });
}

initializeGame();
