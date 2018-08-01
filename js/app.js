'use strict';

console.log('js is linked');

var userName = prompt('What is your name?');
console.log(userName + ' is using your site.');
var quizQuestion = confirm('Hi ' + userName + '! Would you like to take a quiz?');
if (quizQuestion){
  console.log('The user has elected to take the quiz. Beginning quiz now.');
  runQuiz();
} else {
  alert('No worries ' + userName + '. Welcome to my page!');
  console.log('The user has decided they are not interested in a quiz');
}

function runQuiz(){
  alert('Great! This quiz will be five questions but if you get any wrong the quiz is over. Can you make it through all five? Please answer all questions with either a yes or a no, or a y or n. Capitalization doesn\'t matter. I\'m very sophisticated');
  quizOneFunc();
}

function quizOneFunc(){
  var quizOne = prompt('Do I have a pet?');
  console.log('First quiz question asked.');
  if(quizOne.toLowerCase() === 'no' || quizOne.toLowerCase() === 'n'){
    console.log(userName + ' has answered the first question correctly.');
    alert('That is correct, unfortunately.');
    quizTwoFunc();
  } else {
    console.log('User entered an incorrect answer and the quiz has ended.');
    alert('Incorrect! I\'ll have a pet someday. Feel free to play again. In the mean time, welcome to my page!');
  }
}

function quizTwoFunc(){
  var quizTwo = prompt('Have I ever jumped out of an airplane?');
  console.log('Second quiz question asked.');
  if(quizTwo.toLowerCase() === 'no' || quizTwo.toLowerCase() === 'n'){
    console.log(userName + ' has answered the second question correctly.');
    alert('Good guess. I have not. Maybe someday?');
    quizThreeFunc();
  } else {
    console.log('User entered an incorrect answer and the quiz has ended.');
    alert('No I haven\'t. But I love that you believe I could. Feel free to play again. In the mean time, welcome to my page!');
  }
}

function quizThreeFunc(){
  var quizThree = prompt('Do you think I\'ve been out of the country?');
  console.log('Third quiz question asked.');
  if(quizThree.toLowerCase() === 'yes' || quizThree.toLowerCase() === 'y'){
    console.log(userName + ' has answered the third question correctly.');
    alert('I have many times! I love to travel.');
    quizFourFunc();
  } else {
    console.log('User entered an incorrect answer and the quiz has ended.');
    alert('I\'m pleased to say that you are in correct. I love to travel. Enjoy my page!');
  }
}

function quizFourFunc(){
  var quizFour = prompt('Am I an expert programmer?');
  console.log('Fourth quiz question asked.');
  if(quizFour.toLowerCase() === 'no' || quizFour.toLowerCase() === 'n'){
    console.log(userName + ' has answered the first question correctly.');
    alert('Technically you\'re correct, but I\'m working on it!');
    quizFiveFunc();
  } else {
    console.log('User entered an incorrect answer and the quiz has ended.');
    alert('I wish! but you\'re wrong. For now. Enjoy my page!');
  }
}

function quizFiveFunc(){
  var quizFive = prompt('Do I ride a motorcycle?');
  console.log('Fifth and final quiz question asked.');
  if(quizFive.toLowerCase() === 'yes' || quizFive.toLowerCase() === 'y'){
    alert('You\'re right! I love motorcycles');
    alert('Congrats, you passed the quiz with a perfect score! Enjoy my page.');
    console.log('The user has made it through the quiz answering each question correctly');
  } else {
    console.log('User entered an incorrect answer and the quiz has ended.');
    alert('Wrong! I do and I ride it all the time. You almost had a perfect score! Enjoy my page.');
  }
}