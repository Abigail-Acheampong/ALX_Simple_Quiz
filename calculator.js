// Function to add two numbers
function add(number1, number2) {
  return number1 + number2;
  // Returns the sum of number1 and number2
}

// Function to subtract two numbers
function subtract(number1, number2) {
  return number1 - number2;
  // Returns the difference between number1 and number2
}

// Function to multiply two numbers
function multiply(number1, number2) {
  return number1 * number2;
  // Returns the product of number1 and number2
}

// Function to divide two numbers
function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
    // Returns an error message if dividing by zero
  }
  return number1 / number2;
  // Returns the quotient of number1 and number2
}

// Event listener for the addition button
document.getElementById('add').addEventListener('click', function() {
  // Runs when the add button is clicked
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  // Gets the first input value, converts to float, defaults to 0 if empty
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  // Gets the second input value, converts to float, defaults to 0 if empty
  const result = add(number1, number2);
  // Calls the add function with the input values
  document.getElementById('calculation-result').textContent = result;
  // Displays the result in the calculation-result span
});