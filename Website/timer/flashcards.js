let deck = [];
let currentIndex = 0;

// Get DOM Elements
const pasteInput = document.getElementById("paste-input");
const generateBtn = document.getElementById("generate-btn");
const studyArea = document.getElementById("study-area");
const cardContainer = document.getElementById("card-container");
const card = document.getElementById("card");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const progressText = document.getElementById("progress-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flipBtn = document.getElementById("flip-btn");

// Parse text input into flashcards
generateBtn.addEventListener("click", () => {
  const text = pasteInput.value.trim();
  if (!text) {
    alert("Please paste some content first!");
    return;
  }

  const lines = text.split("\n");
  deck = [];

  lines.forEach((line) => {
    // Regex matches common separators: tab (\t), hyphen (-), colon (:), or equal (=)
    const parts = line.split(/\t| - | : | = |:|-|=/);
    if (parts.length >= 2) {
      const term = parts[0].trim();
      const definition = parts.slice(1).join("-").trim(); // Rejoins in case def has hyphens
      if (term && definition) {
        deck.push({ term, definition });
      }
    }
  });

  if (deck.length === 0) {
    alert("Could not detect any term-definition pairs. Please separate terms and definitions using '-', ':', or tabs.");
    return;
  }

  currentIndex = 0;
  studyArea.classList.remove("hidden");
  showCard(currentIndex);
});

// Display card at index
function showCard(index) {
  card.classList.remove("flipped");
  setTimeout(() => {
    cardFront.textContent = deck[index].term;
    cardBack.textContent = deck[index].definition;
    progressText.textContent = `Card ${index + 1} of ${deck.length}`;
  }, 150);
}

// Flip Card Action
function flipCard() {
  card.classList.toggle("flipped");
}

cardContainer.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);

// Controls
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < deck.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
})