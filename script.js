const quotes = [
  {
    quote:
      "“Start by doing what’s necessary; then do what’s possible; and suddenly you are doing the impossible.” ",
    Author: "– Francis of Assisi",
  },
  {
    quote:
      "“My attitude is that if you push me towards something that you think is a weakness, then I will turn that perceived weakness into a strength.",
    Author: "– Michael Jordan",
  },
  {
    quote: " “Attitude is a little thing that makes a big difference.”  ",
    Author: " – Winston Churchill ",
  },
  {
    quote:
      " “Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.” ",
    Author: " – Oprah Winfrey ",
  },
  {
    quote:
      "“Feeling gratitude and not expressing it is like wrapping a present and not giving it.   ",
    Author: " – William Arthur Ward",
  },
  {
    quote:
      " “Tell me and I forget, teach me and I may remember, involve me and I learn.”  ",
    Author: "– Benjamin Franklin ",
  },
  {
    quote:
      "“Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.” ",
    Author: "—Maimonides ",
  },
  {
    quote: " “ When one teaches, two learn ”  ",
    Author: "— Robert A. Heinlein ",
  },
  {
    quote: " “ If you don't ask, you don't get. ”  ",
    Author: "– Stevie Wonder ",
  },
  {
    quote:
      " “Accept the challenges so that you can feel the exhilaration of victory  ”  ",
    Author: "– George S. Patton ",
  },
  {
    quote: " “ It always seems impossible until its done. ”  ",
    Author: "-Nelson Mandela ",
  },
  {
    quote:
      " “ Your time is limited, so don't waste it living someone else's life. ”  ",
    Author: "-Steve Jobs ",
  },
  {
    quote: " “ Everything you can imagine is real. ”  ",
    Author: " -Pablo Picasso",
  },
  {
    quote: "“Don't count the days, make the days count.”",
    Author: "   -Muhammad Ali",
  },
  {
    quote: "“Only I can change my life. No one can do it for me.”  ",
    Author: "- Carol Burnett ",
  },
  {
    quote: "“The purpose of our lives is to be happy. ” ",
    Author: "-Dalai Lama",
  },
  {
    quote: "“The journey of a thousand miles begins with one step ” ",
    Author: "-Lao Tzu ",
  },
  {
    quote: "“Don’t wait. The time will never be just right.” ",
    Author: " -Napoleon Hill",
  },
  {
    quote:
      "“ Opportunity does not knock, it presents itself when you beat down the door.” ",
    Author: "-Kyle Chandler ",
  },
  {
    quote: "“In the middle of every difficulty lies opportunity. ” ",
    Author: "  -Albert Einstein",
  },
];

const random = document.querySelector(".btn");
let author = document.querySelector(".author");
let quote = document.querySelector(".quote");

window.addEventListener("load", function () {
  let number = 0;
  let generate = quotes[number];
  quote.innerText = generate.quote;
  author.innerText = generate.Author;
});
random.addEventListener("click", function () {
  let number = Math.floor(Math.random() * quotes.length);
  let generate = quotes[number];
  quote.innerText = generate.quote;
  author.innerText = generate.Author;
});
