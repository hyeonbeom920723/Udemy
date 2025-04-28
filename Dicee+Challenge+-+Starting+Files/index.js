const renderDice = () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  const randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
  getRandomeDiceImage(randomNumber1, randomNumber2);
  getWinner(randomNumber1, randomNumber2);
};

const getRandomeDiceImage = (randomNumber1, randomNumber2) => {
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");
  console.log(dice1);
  dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
  dice2.setAttribute("src", `images/dice${randomNumber2}.png`);
};

const getWinner = (randomNumber1, randomNumber2) => {
  const winner = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 Wins!";
  } else {
    winner.innerHTML = "Draw!";
  }
};

renderDice();
