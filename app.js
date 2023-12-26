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
    img: "images/icecream.png",
  },
  {
    myName: "milkshake",
    img: "images/milkshake.jpg",
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
    img: "images/icecream.png",
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
const cardsChosen = [];

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

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].myName);
  console.log("clicked", cardId);
  console.log(cardsChosen);
}
