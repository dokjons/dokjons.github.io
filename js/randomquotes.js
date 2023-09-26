const quotes = [
    "The first step to getting anywhere is deciding you're no longer willing to stay where you are.",
    "Everybody wants happiness, nobody wants pain, but you can't have a rainbow without a little rain.",
    "The voice of none is stronger than the voice of one.",
    "Success always occurs in private, and failure in full view.",
    "If you can't find a way, create one.",
    "Better to stand alone with truth than in company of lies.",
    "Life brings tears, smiles, and memories: the tears dry, the smiles fade, but the memories live on forever.",
    "Better to fight for something than live for nothing.",
    "United as One. Divided by None.",
    "You can't kill an idea."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Typewriter effect function
function typeText(text, callback) {
  const quotesSpan = document.getElementById("quotes");
  let i = 0;
  const delay = 50; // ms between each character
  const timer = setInterval(() => {
    if (i < text.length) {
      quotesSpan.textContent += text[i];
      i++;
    } else {
      clearInterval(timer);
      if (callback) {
        callback();
      }
    }
  }, delay);
}

function updateQuote() {
  const quotesSpan = document.getElementById("quotes");
  quotesSpan.textContent = ''; // Clear existing text
  const randomQuote = getRandomQuote();
  // Call the typewriter effect function with the random quote
  typeText(randomQuote);
}

window.addEventListener("load", updateQuote);
