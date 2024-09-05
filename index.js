const randomTexts = [
  "5 seconds shots!",
  "Hino imo crush?",
  "E hatag ha imo sapit",
  "Take two sips!",
  "Do a shot!",
  "Make a rule for the next round!",
  "Skip your next turn!",
  "Exchange drinks with another player!",
  "Choose someone to take a drink!",
  "Say a funny toast!",
  "Tingug hin baka o kanding!",
  "Pili hin usa nga mag-inom!",
  "Kanta an chorus han imo paborito nga kanta!",
  "Himoa an 10 ka jumping jacks o push-ups!",
  "Kumanta tulad ng isang hayop!"
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * randomTexts.length); // Get a random index
  return randomTexts[randomIndex]; // Return the random text
}

function showModal(title, message) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = message;
  document.getElementById("customAlert").style.display = "block";
}

function closeModal() {
  document.getElementById("customAlert").style.display = "none";
}

function startGame() {
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
  }, 2000); // 2 seconds delay
}

function rollDice() {
  const player1Name = document.getElementById('player1Name').value || "Player 1";
  const player2Name = document.getElementById('player2Name').value || "Player 2";

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
  document.querySelector(".img1").setAttribute("src", randomImageSource1);
  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("#player1Label").textContent = `${player1Name}`;
    document.querySelector("#player2Label").textContent = `${player2Name}`;
    const randomMessage = getRandomText();
    showModal(`${player1Name} Wins!`, randomMessage);
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("#player1Label").textContent = `${player1Name}`;
    document.querySelector("#player2Label").textContent = `${player2Name}`;
    const randomMessage = getRandomText();
    showModal(`${player2Name} Wins!`, randomMessage);
  } else {
    document.querySelector("#player1Label").textContent = `${player1Name}`;
    document.querySelector("#player2Label").textContent = `${player2Name}`;
    showModal('Draw!');
  }
}

document.getElementById('refreshButton').addEventListener('click', function() {
  var button = this;
  button.disabled = true;
  button.classList.add('loading');
  
  setTimeout(() => {
    rollDice();
    button.disabled = false;
    button.classList.remove('loading');
  }, 1000); // 1 second delay
});
