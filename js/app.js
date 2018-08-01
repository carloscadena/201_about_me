'use strict';

console.log('js is linked');

var correctAnswers = 0;
var userAnswerList = [];
var guessesLeft = 4;

var quizQuestions = [
  'Do I have a pet?',
  'Have I ever jumped out of an airplane?',
  'Do you think I\'ve been out of the country?',
  'Am I an expert programmer?',
  'Do I ride a motorcycle?',
  'One what day of the month is my birthday?',
  'Can you guess a country I\'ve visited outside the US?'
];

var quizAnswers = [
  'no',
  'no',
  'yes',
  'no',
  'yes',
  4,
  ['canada', 'ecuador', 'the netherlands', 'portugal', 'hungary', 'austria', 'germany', 'norway' ]
];

for (var i = 0; i < 7; i++){
  if(i < 5){
    var validResponse = false;
    while (!validResponse){
      var userAnswer = prompt(quizQuestions[i]);
      if (userAnswer.toLowerCase() === 'n' || userAnswer.toLowerCase() === 'no'){
        userAnswer = 'no';
        userAnswerList.push(userAnswer);
        validResponse = true;
      } else if (userAnswer.toLowerCase() === 'y' || userAnswer.toLowerCase() === 'yes') {
        userAnswer = 'yes';
        userAnswerList.push(userAnswer);
        validResponse = true;
      } else {
        alert('Not a valid response. Please enter either yes or no, or y or n')
        validResponse = false;
      }
    }
    if (userAnswer === quizAnswers[i]){
      correctAnswers += 1;
    }
    console.log(userAnswerList);
  } 

}

alert('Congratulations, you got ' + correctAnswers + ' out of 5 correct!');

// var userName = prompt('What is your name?');
// console.log(userName + ' is using your site.');
// var quizQuestion = confirm('Hi ' + userName + '! Would you like to take a quiz?');
// if (quizQuestion){
//   console.log('The user has elected to take the quiz. Beginning quiz now.');
//   runQuiz();
// } else {
//   alert('No worries ' + userName + '. Welcome to my page!');
//   console.log('The user has decided they are not interested in a quiz');
// }

// function runQuiz(){
//   alert('Great! This quiz will be five questions but if you get any wrong the quiz is over. Can you make it through all five? Please answer all questions with either a yes or a no, or a y or n. Capitalization doesn\'t matter. I\'m very sophisticated');
//   quizOneFunc();
// }

// function quizOneFunc(){
//   var quizOne = prompt('Do I have a pet?');
//   console.log('First quiz question asked.');
//   if(quizOne.toLowerCase() === 'no' || quizOne.toLowerCase() === 'n'){
//     console.log(userName + ' has answered the first question correctly.');
//     alert('That is correct, unfortunately.');
//     quizTwoFunc();
//   } else {
//     console.log('User entered an incorrect answer and the quiz has ended.');
//     alert('Incorrect! I\'ll have a pet someday. Feel free to play again. In the mean time, welcome to my page!');
//   }
// }

// function quizTwoFunc(){
//   var quizTwo = prompt('Have I ever jumped out of an airplane?');
//   console.log('Second quiz question asked.');
//   if(quizTwo.toLowerCase() === 'no' || quizTwo.toLowerCase() === 'n'){
//     console.log(userName + ' has answered the second question correctly.');
//     alert('Good guess. I have not. Maybe someday?');
//     quizThreeFunc();
//   } else {
//     console.log('User entered an incorrect answer and the quiz has ended.');
//     alert('No I haven\'t. But I love that you believe I could. Feel free to play again. In the mean time, welcome to my page!');
//   }
// }

// function quizThreeFunc(){
//   var quizThree = prompt('Do you think I\'ve been out of the country?');
//   console.log('Third quiz question asked.');
//   if(quizThree.toLowerCase() === 'yes' || quizThree.toLowerCase() === 'y'){
//     console.log(userName + ' has answered the third question correctly.');
//     alert('I have many times! I love to travel.');
//     quizFourFunc();
//   } else {
//     console.log('User entered an incorrect answer and the quiz has ended.');
//     alert('I\'m pleased to say that you are in correct. I love to travel. Enjoy my page!');
//   }
// }

// function quizFourFunc(){
//   var quizFour = prompt('Am I an expert programmer?');
//   console.log('Fourth quiz question asked.');
//   if(quizFour.toLowerCase() === 'no' || quizFour.toLowerCase() === 'n'){
//     console.log(userName + ' has answered the first question correctly.');
//     alert('Technically you\'re correct, but I\'m working on it!');
//     quizFiveFunc();
//   } else {
//     console.log('User entered an incorrect answer and the quiz has ended.');
//     alert('I wish! but you\'re wrong. For now. Enjoy my page!');
//   }
// }

// function quizFiveFunc(){
//   var quizFive = prompt('Do I ride a motorcycle?');
//   console.log('Fifth and final quiz question asked.');
//   if(quizFive.toLowerCase() === 'yes' || quizFive.toLowerCase() === 'y'){
//     alert('You\'re right! I love motorcycles');
//     alert('Congrats, you passed the quiz with a perfect score! Enjoy my page.');
//     console.log('The user has made it through the quiz answering each question correctly');
//   } else {
//     console.log('User entered an incorrect answer and the quiz has ended.');
//     alert('Wrong! I do and I ride it all the time. You almost had a perfect score! Enjoy my page.');
//   }
// }