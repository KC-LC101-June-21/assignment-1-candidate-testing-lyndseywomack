const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Candidate Name: " + candidateName + "!\n") 
}

function askQuestion() {
  for (let i=0; i<questions.length; i++){
  candidateAnswer = input.question((i+1) + ") " + questions[i]);
  candidateAnswers.push(candidateAnswer);
  console.log("Your Answer: " + candidateAnswer +  "\nCorrect Answer: " + correctAnswers[i]+"\n")
  }
  return candidateAnswers;
}


function gradeQuiz(candidateAnswers) {
  let numberOfCorrectAnswers = 0
  for (let i=0; i<questions.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numberOfCorrectAnswers++;
    } 
  }
  let grade = ((numberOfCorrectAnswers / correctAnswers.length) * 100)
  let status = ""
  if (grade >= 80){
    status = 'PASSED'
  } else {
    status = 'FAILED'
  }
  console.log(`>>>  Overall Grade: ${grade}% (${numberOfCorrectAnswers} out of 5 correct)  <<<
>>>  STATUS: ${status}  <<<`);
  return grade
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
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

