const quizContainer = document.getElementById(`quiz`);
const resultsContainer = document.getElementById(`results`);
const submitButton = document.getElementById(`submit`);

function buildQuiz() {}

function showResults() {}

buildQuiz();

submitButton.addEventListener(`click`, showResults); //on submit, run showResults function

const myQuestions = [
  {
    question: "What does HTML stands for?",
    answers: {
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What is the difference between an opening tag and a closing tag?",
    answers: {
      a: "There is no difference",
      b: "Closing tag has a / in front",
      c: "Opening tag has a / in front",
    },
    correctAnswer: "b",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
    },
    correctAnswer: "",
  },
  {
    question: "",
    answers: {
      a: "",
      b: "",
      c: "",
    },
    correctAnswer: "",
  },
];
