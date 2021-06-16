const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = (" ")

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ")
let correctAnswer = ("Sally Ride")
let candidateAnswer = (" ")
let questions = ["Who was the first American woman in space?	", "True or false: 5 kilometer == 5000 meters?	", "(5 + 3)/2 * 10 = ?	", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	", "What is the minimum crew size for the ISS?	"]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []
let numberOfCorrectAnswers = 0



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i=0; i<questions.length; i++){
candidateAnswer = input.question(questions[i]);
candidateAnswers.push(candidateAnswer);
  }
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i=0; i<questions.length; i++){
  console.log("Candidate Name: ", candidateName);
  console.log(`${i+1}) ${questions[i]} \n Your Answer: ${candidateAnswers[i]} \n The Correct Answer: ${correctAnswers[i]}`);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
  } 
}
  
  let grade = (numberOfCorrectAnswers / correctAnswers.length * 100)
  console.log(`>>>  Overall Grade: ${grade}% (${numberOfCorrectAnswers} out of 5 correct)  <<<`);
  if (grade >= 80){
    console.log('>>>  STATUS: Passed  <<<')
  } else {
    console.log('>>>  STATUS: Failed  <<<')
  }
  return grade
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  // console.log("Hey there, " + candidateName + " please answer the questions below.");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

