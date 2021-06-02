// console.log(questions);

// var time = question.length * 10;
var time = 3;
var qIndex = 0;

var startBtn = document.getElementById("start-btn");
var timeEl = document.getElementById('time')
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");

function startQuiz() {
    timer = setInterval(function () {
        time--;
        timeEl.textContent = time;
        if (time === 0) {
            endQuiz();
        }
    },
        1000);
    showQuestion();
};

function endQuiz() {
    clearInterval(timer);
}

function showQuestion() {
    var currentQuestion = questions[qIndex];
    // console.log(currentQuestion);
    questionEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        // console.log(choice);
        var newBtn = document.createElement("button");
        newBtn.textContent = choice;
        choicesEl.appendChild(newBtn);
        newBtn.onclick = choiceClick;    
    }

};

function choiceClick(event) {
    if (qIndex >= questions.length) {

    } else {
        var currentQuestion = questions[qIndex];
        var choiceClick = event.target.textContent;
        if (choiceClick.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        } else {
        time -= 10;
        }
        qIndex++;
        showQuestion();
    }
};

startBtn.onclick = startQuiz;