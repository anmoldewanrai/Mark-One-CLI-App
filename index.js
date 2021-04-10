var readlineSync = require('readline-sync'); //adding readline-sync

var score = 0;

// High Scores Array
var highScores = [
  {
    name: 'Anmol',
    score: 3
  },
  {
    name: 'Ankit',
    score: 2
  }
]

var questions = [
  {
    question: 'Where do I live? ',
    answer: 'siliguri'
  },
  {
    question: 'My favorite superhero would be? ',
    answer: 'Thor'
  },
  {
    question: 'What do I do? ',
    answer: 'code'
  }
]

function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log();
  console.log("Welcome, " + userName + "!");
  console.log("Do you know me? Let's see! ");
  console.log();
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase === answer.toUpperCase){
    score = score + 1;
    console.log();
    console.log("You are right!");
    console.log("Your score is, " + score);
    console.log("-------------")
    console.log();
  }
  else{
    console.log("Sorry, wrong answer!");
  }
}

function game(){
  for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();