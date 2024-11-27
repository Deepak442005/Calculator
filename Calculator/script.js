// Append the clicked number or operator to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Perform the calculation using the eval() function and display the result
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  