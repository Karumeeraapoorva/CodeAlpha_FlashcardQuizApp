const flashcards = [
  { q: "What does HTML stand for?", a: "HyperText Markup Language" },
  { q: "What does CSS stand for?", a: "Cascading Style Sheets" },
  { q: "What is JavaScript used for?", a: "Making web pages interactive" },
  { q: "What is a variable?", a: "A container to store data values" },
  { q: "Which tag is used for headings?", a: "<h1> to <h6>" },
  { q: "What is GitHub?", a: "A platform to host and manage code" },
  { q: "What is Git?", a: "Version control system" },
  { q: "What does CSS control?", a: "Layout and design of web pages" },
  { q: "What is an array?", a: "Collection of multiple values" },
  { q: "What is a function?", a: "A block of reusable code" },
  { q: "What is localStorage?", a: "Stores data in browser permanently" },
  { q: "What does DOM stand for?", a: "Document Object Model" },
  { q: "Which language runs in browser?", a: "JavaScript" },
  { q: "What is an IDE?", a: "Integrated Development Environment" },
  { q: "What is responsive design?", a: "Design for all screen sizes" },
  { q: "What is a loop?", a: "Repeats code multiple times" },
  { q: "What is an event?", a: "User action like click or input" },
  { q: "What is API?", a: "Application Programming Interface" },
  { q: "What is frontend development?", a: "User interface development" },
  { q: "What is backend development?", a: "Server-side development" }
];

let current = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const showBtn = document.getElementById("showBtn");

function loadCard() {
  questionEl.textContent = flashcards[current].q;
  answerEl.textContent = flashcards[current].a;
  answerEl.classList.add("hidden");
  showBtn.textContent = "Show Answer";
}

showBtn.onclick = () => {
  if (answerEl.classList.contains("hidden")) {
    answerEl.classList.remove("hidden");
    showBtn.textContent = "Hide Answer";
  } else {
    answerEl.classList.add("hidden");
    showBtn.textContent = "Show Answer";
  }
};

function nextCard() {
  current = (current + 1) % flashcards.length;
  loadCard();
}

function prevCard() {
  current = (current - 1 + flashcards.length) % flashcards.length;
  loadCard();
}

loadCard();

