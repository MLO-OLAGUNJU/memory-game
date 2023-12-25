const cardArray = [
  {
    myName: "fries",
    img: "images/fries.jpg",
  },
  {
    myName: "cheeseburger",
    img: "images/cheeseburger.jpg",
  },
  {
    myName: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    myName: "icecream",
    img: "images/icecream.jpg",
  },
  {
    myName: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    myName: "pizza",
    img: "images/pizza.jpg",
  },
  {
    myName: "fries",
    img: "images/fries.jpg",
  },
  {
    myName: "cheeseburger",
    img: "images/cheeseburger.jpg",
  },
  {
    myName: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    myName: "icecream",
    img: "images/icecream.jpg",
  },
  {
    myName: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    myName: "pizza",
    img: "images/pizza.jpg",
  },
];

//to sort the cards randomly shuffling
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.jpg");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
  }
}

createBoard();
