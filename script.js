let flashcards = [
  { question: "What is HTML?", answer: "Hyper Text Markup Language" },
  { question: "What is CSS?", answer: "Cascading Style Sheets" },
  { question: "What is JavaScript?", answer: "Programming language for web" }
];

let index = 0;

function loadCard() {
  document.getElementById("question").innerText = flashcards[index].question;
  document.getElementById("answer").innerText = flashcards[index].answer;
  document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
  index = (index + 1) % flashcards.length;
  loadCard();
}

function prevCard() {
  index = (index - 1 + flashcards.length) % flashcards.length;
  loadCard();
}

loadCard();
