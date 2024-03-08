let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function operate(operator) {
  if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
    displayValue += operator;
    document.getElementById('display').innerText = displayValue;
  }
}

function calculate() {
  if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
    try {
      displayValue = eval(displayValue);
      document.getElementById('display').innerText = displayValue;
    } catch (error) {
      alert('Invalid input');
      clearDisplay();
    }
  }
}
function deleteLast(){
  if(displayValue !==''){
    displayValue = displayValue.slice(0,1);
    document.getElementById('display') .innerText = displayValue || '0';
  }
}