document.addEventListener('DOMContentLoaded', function() {
  // Ensures the script runs after the HTML document is fully loaded

  function checkAnswer() {
    // This function checks if the user's selected answer is correct

    const correctAnswer = "4";
    // Stores the correct answer for the quiz

    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    // Selects the checked radio button with name="quiz"

    let userAnswer = "";
    // Initializes userAnswer to an empty string

    if (selectedOption) {
      userAnswer = selectedOption.value;
      // Gets the value of the selected radio button
    }

    const feedback = document.getElementById('feedback');
    // Selects the feedback element to display the result

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      // Displays success message if the answer is correct
    } else {
      feedback.textContent = "That's incorrect. Try again!";
      // Displays error message if the answer is incorrect
    }
  }

  const submitBtn = document.getElementById('submit-answer');
  // Selects the submit button by its ID

  submitBtn.addEventListener('click', checkAnswer);
  // Adds a click event listener to the button to call checkAnswer when clicked
});