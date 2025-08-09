document.addEventListener('DOMContentLoaded', function() {
 //Ensures the script after the HTML document is fully loaded

 function checkAnswer(){
  // This function checks if the user's selected answer is correct
  const correctAnswer = "4"; // The correct answer for the quiz question
  const userAnswer = document.querySelector('input[name="quiz"]:checked'); //Selects the checked radio button with name="quiz"
  const feedback = document.getElementById('feedback'); // a variable for storing the message of whether correct or wrong
  if (userAnswer == correctAnswer) {
   feedback.textContent = 'Correct! Well done.'; // Displays a success message
  } else {
   feedback.textContent = 'Incorrect. Please try again.'; // Displays an error message
  }
 }

 const submitBtn = document.getElementById('submit-answer'); // Selects the submit button by its ID

 submitBtn.addEventListener('click', checkAnswer);
 // Adds a click event listener to the button to call checkAnswer function when clicked
});