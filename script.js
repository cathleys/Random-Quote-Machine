// get 5 quotes stored in array as objects
const quotes = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: " Albert Einstein"
  },

  {
    quote: "So many books, so little time.",
    source: "Frank Zappa"
  },

  {
    quote: "A room without books is like a body without a soul.",
    source: "Marcus Tullius Cicero"
  },

  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source: "Bernard M. Baruch"
  },

  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: "Dr. Seuss"
  },

  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: " Mae West"
  },

  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    source: "Babe Ruth"
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    source: "Will Smith"
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    source: "Steve Jobs"
  },

  {
    quote:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    source: "Frank Sinatra"
  },
  {
    quote: "In order to write about life first you must live it.",
    source: "Ernest Hemingway"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost"
  }
];

const button = document.querySelector("#button");
const quote = document.querySelector(".quote");
const source = document.querySelector(".source");

// create an addeventlistener on button when clicked
button.addEventListener("click", () => {
  printQuote();
});

// create a function that gets the quote randomly
function randomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[randomQuote].quote;
  source.innerHTML = quotes[randomQuote].source;
}

// create a function the gets a random color.
function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = "rgb(" + red + "," + green + "," + blue + ")";

  return randomColor;
}

// function that will execute all the functions
function printQuote() {
  randomQuote();
  const color = randomColor();
  document.body.style.backgroundColor = color;
}
