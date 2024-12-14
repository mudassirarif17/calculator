// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to calculate the result
  function calculate() {
    let display = document.getElementById('display').value;
    try {
      // Using eval() to evaluate the mathematical expression
      document.getElementById('display').value = eval(display);
    } catch (error) {
      // If there is an error, show "Error" in the display
      document.getElementById('display').value = 'Error';
    }
  }
  