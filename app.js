const cardArray = [
  {
    myName: "fries",
    img: "images/fries.png",
  },
  {
    myName: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    myName: "hotdog",
    img: "images/hotdog.png",
  },
  {
    myName: "icecream",
    img: "images/ice-cream.png",
  },
  {
    myName: "milkshake",
    img: "images/milkshake.png",
  },
  {
    myName: "pizza",
    img: "images/pizza.png",
  },
  {
    myName: "fries",
    img: "images/fries.png",
  },
  {
    myName: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    myName: "hotdog",
    img: "images/hotdog.png",
  },
  {
    myName: "icecream",
    img: "images/ice-cream.png",
  },
  {
    myName: "milkshake",
    img: "images/milkshake.png",
  },
  {
    myName: "pizza",
    img: "images/pizza.png",
  },
];

//to sort the cards randomly shuffling
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardswon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length /* or i < 12 (use any!)*/; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoid = cardsChosenIds[1];
  if (optionOneId == optionTwoid) {
    alert("You have clicked the same image");
  }
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoid].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoid].removeEventListener("click", flipCard);
    cardswon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoid].setAttribute("src", "images/blank.png");
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].myName);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
