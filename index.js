const myQuestions = [

    {
        question: "Q. What is the capital of Australia?",
        a: "Sydney",
        b: "Canberra",
        c: "Melbourne",
        d: "Perth",
        ans: "ans2"
    },

    {
        question: "Q. Which planet is called the Red Planet?",
        a: "Venus",
        b: "Mars",
        c: "Jupiter",
        d: "Mercury",
        ans: "ans2"
    },

    {
        question: "Q. Who is known as the God of Cricket?",
        a: "Virat Kohli",
        b: "MS Dhoni",
        c: "Sachin Tendulkar",
        d: "Rohit Sharma",
        ans: "ans3"
    },

    {
        question: "Q. How many players are there in a cricket team?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        ans: "ans3"
    },

    {
        question: "Q. Who was the first Prime Minister of India?",
        a: "Mahatma Gandhi",
        b: "Jawaharlal Nehru",
        c: "Sardar Patel",
        d: "Subhash Chandra Bose",
        ans: "ans2"
    },

    {
        question: "Q. In which year did India get independence?",
        a: "1945",
        b: "1946",
        c: "1947",
        d: "1950",
        ans: "ans3"
    },

    {
        question: "Q. Who is called the constitutional head of India?",
        a: "Prime Minister",
        b: "President",
        c: "Governor",
        d: "Chief Justice",
        ans: "ans2"
    },

    {
        question: "Q. How many houses are there in the Indian Parliament?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans2"
    },

    {
        question: "Q. Which is the largest ocean in the world?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Pacific Ocean",
        d: "Arctic Ocean",
        ans: "ans3"
    },

    {
        question: "Q. Which gas do plants absorb?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Hydrogen",
        ans: "ans3"
    }

];

/* RANDOM QUESTIONS */

myQuestions.sort(() => Math.random() - 0.5);

/* RESULT MESSAGES */

const resultFinal = {

    excellent: "Outstanding! Your knowledge is excellent.",

    good: "Good Job! You are performing very well.",

    average: "Nice effort! Keep learning and improving.",

    poor: "You need more practice and preparation."

};

/* SELECT ELEMENTS */

const question = document.querySelector(".que");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const result = document.querySelector(".score");

const questionBlock = document.querySelector(".card");

const warning = document.querySelector(".warning");

/* VARIABLES */

let questionCount = 0;
let score = 0;
let userName = "";

/* LOAD QUESTION */

function loadQuestion() {

    warning.style.display = "none";

    const questionList = myQuestions[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

    answers.forEach(answer => {

        answer.checked = false;

    });

}

loadQuestion();

/* GET SELECTED ANSWER */

function checkSelectedAnswer() {

    let ans = "";

    answers.forEach(answerElement => {

        if (answerElement.checked) {

            ans = answerElement.id;

        }

    });

    return ans;

}

/* SUBMIT BUTTON */

submit.addEventListener('click', () => {

    userName = document.querySelector("#username").value;

    if (userName === "") {

        alert("Please enter your name");

        return;

    }

    const answer = checkSelectedAnswer();

    if (!answer) {

        warning.style.display = "block";

        return;

    }

    if (answer === myQuestions[questionCount].ans) {

        score++;

    }

    questionCount++;

    if (questionCount < myQuestions.length) {

        loadQuestion();

    }

    else {

        showResult();

    }

});

/* SHOW RESULT */

function showResult() {

    questionBlock.style.display = "none";

    result.style.display = "flex";

    document.querySelector(".player-name").innerHTML =
        `👤 ${userName}`;

    document.querySelector(".score h1").innerHTML =
        `${score}/10`;

    const scoreText = document.querySelector(".score h1");

    const resultText = document.querySelector(".score h4");

    if (score >= 8) {

        resultText.innerHTML =
            resultFinal.excellent;

        scoreText.style.color =
            "#22c55e";

    }

    else if (score >= 5) {

        resultText.innerHTML =
            resultFinal.good;

        scoreText.style.color =
            "#eab308";

    }

    else if (score >= 3) {

        resultText.innerHTML =
            resultFinal.average;

        scoreText.style.color =
            "#3b82f6";

    }

    else {

        resultText.innerHTML =
            resultFinal.poor;

        scoreText.style.color =
            "#ef4444";

    }

}

/* RETRY QUIZ */

function retry() {

    questionBlock.style.display = "block";

    result.style.display = "none";

    questionCount = 0;

    score = 0;

    myQuestions.sort(() => Math.random() - 0.5);

    loadQuestion();

}