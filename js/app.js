'use strict';

console.log('js is linked');

var userName = prompt('What is your name?');
var quizQuestion = confirm('Hi ' + userName + '! Would you like to take a quiz?');
if (quizQuestion){
  runQuiz();
} else {
  alert('No worries ' + userName + '. Welcome to my page!');
}

function runQuiz(){
  alert('Great! This quiz will be five questions but if you get any wrong the quiz is over. Can you make it through all five? Please answer all questions with either a yes or a no, or a y or n. Capitalization doesn\'t matter. I\'m very sophisticated');
  var quizOne = prompt('Do I have a pet?');
  if(quizOne.toLowerCase() === 'no' || quizOne.toLowerCase() === 'n'){
    alert('That is correct, unfortunately.');
  } else {
    alert('Incorrect! I\'ll have a pet someday. Feel free to play again but in the mean time, welcome to my page!');
  }



}