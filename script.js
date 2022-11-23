const random = document.querySelector(".btn");
let author = document.querySelector(".author");
let quote = document.querySelector(".quote");

window.addEventListener("load", function () {
  quoteGenerator();
});
random.addEventListener("click", function () {
  quoteGenerator();
});
async function quoteGenerator() {
  let quote_data = await fetch("https://Quotable.io/random");
  let data = await quote_data.json();
  author.innerText = data.author;
  quote.innerText = data.content;
}
