const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let flashcards = [
  { id: 1, question: "What is Kubernetes?", answer: "An open-source container orchestration platform." },
  { id: 2, question: "What does a Pod represent?", answer: "A single instance of a running process in your cluster." }
];

// Health check
app.get('/', (req, res) => {
  res.send('HOME!');
});

// Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// Get all cards
app.get('/cards', (req, res) => {
  res.json(flashcards);
});

// Add a card
app.post('/cards', (req, res) => {
  const { question, answer } = req.body;
  const newCard = { id: flashcards.length + 1, question, answer };
  flashcards.push(newCard);
  res.status(201).json(newCard);
});

app.listen(port, () => {
  console.log(`Flashcard API listening at http://localhost:${port}`);
});
