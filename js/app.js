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
  '4',
  ['canada', 'ecuador', 'the netherlands', 'portugal', 'iceland', 'hungary', 'austria', 'germany', 'norway' ]
];

var userName = prompt('Hello! What\'s your name?');
console.log(userName + ' is using the site.')
alert('Hi, ' + userName + '! Before I show you my page let\'s take a quiz.')
var acceptableResponses = ['yes', 'no', 'y', 'n'];
function validResponseCheck(userAnswer){
  userAnswer = userAnswer.toLowerCase();
  if(acceptableResponses.includes(userAnswer)){
    userAnswerList.push(userAnswer);
    validResponse = true;
    return true
  } else {
    alert('Not a valid response. Please enter either yes or no, or y or n');
    validResponse = false;
  }
}
for (var i = 0; i < 7; i++){
  console.log('We\'ve made it to question ' + (i + 1))
  if(i < 5){
    var validResponse = false;
    while (!validResponse){
      var userAnswer = prompt(quizQuestions[i]);
      validResponseCheck(userAnswer);
    }
    if (userAnswer === quizAnswers[i]){
      correctAnswers += 1;
    }
    console.log(userAnswerList);
  } else if(i === 5) {
    while(guessesLeft > 0){
      userAnswer = prompt(quizQuestions[i]);
      if (userAnswer === quizAnswers[i]){
        alert('Great guess! That is correct.');
        correctAnswers += 1;
        break;
      } else if (userAnswer > quizAnswers[i]){
        guessesLeft--;
        alert('That\'s too high. You have ' + guessesLeft + ' guesses left.');
      } else {
        guessesLeft--;
        alert('That\'s too low! You have ' + guessesLeft + ' guesses left.'  );
      }
    }

  } else {
    guessesLeft = 6;
    while (guessesLeft > 0){
      userAnswer = prompt(quizQuestions[i]);
      if (quizAnswers[i].includes(userAnswer)){
        alert('What a great guess! I have been there. The countries I\'ve visited are Canada, Ecuador, the Netherlands, Portugal, Iceland, Hungary, Austria, Germany, Norway');
        correctAnswers += 1;
        break;
      } else {
        guessesLeft--;
        if (guessesLeft === 0){
          alert('I have not been there. You\'re out of guesses.');
        } else if (guessesLeft === 1) {
          alert('I have not been there. Try again! You only have 1 guess left!');
        } else {
          alert('I have not been there. Try again! You have ' + guessesLeft + ' guesses left.');
        }
      }
    }
  }

}

alert('Congratulations, ' + userName + '! You got ' + correctAnswers + ' out of 7 correct!');