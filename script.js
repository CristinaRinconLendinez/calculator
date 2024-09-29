let firstNumber = null;
let operation = null;

function setOperation(op) {
  if (!validate()) return;  // Validate before proceeding

  firstNumber = parseFloat(document.getElementById('input').value);
  operation = op;
  document.getElementById('input').value = '';
}

function calculate() {
  if (!validate()) return;  // Validate before proceeding

  const secondNumber = parseFloat(document.getElementById('input').value);
  let result;
  
  if (operation === 'add') {
    result = firstNumber + secondNumber;
  } else if (operation === 'multiply') {
    result = firstNumber * secondNumber;
  }
  
  document.getElementById('input').value = result;
  updateInfo(result);
}

function square() {
  if (!validate()) return;  // Validate before proceeding

  const value = parseFloat(document.getElementById('input').value);
  const result = value * value;
  document.getElementById('input').value = result;
  updateInfo(result);
}

function cube() {
  if (!validate()) return;  // Validate before proceeding

  const value = parseFloat(document.getElementById('input').value);
  const result = value * value * value;
  document.getElementById('input').value = result;
  updateInfo(result);
}

function sqrt() {
  if (!validate()) return;  // Validate before proceeding

  const value = parseFloat(document.getElementById('input').value);
  const result = Math.sqrt(value);
  document.getElementById('input').value = result;
  updateInfo(result);
}

function mod() {
  const value = parseFloat(document.getElementById('input').value);
  const result = value >= 0 ? value : -value;
  document.getElementById('input').value = result;
  updateInfo(result);
}

function fact() {
  if (!validate()) return;  // Validate before proceeding

  const value = parseInt(document.getElementById('input').value);
  let result = 1;
  for (let i = value; i > 1; i--) {
    result *= i;
  }
  document.getElementById('input').value = result;
  updateInfo(result);
}

function sumatorio() {
  if (!validate()) return;  // Validate before proceeding

  const values = document.getElementById('input').value.split(',').map(Number);
  const result = values.reduce((a, b) => a + b, 0);
  document.getElementById('input').value = result;
  updateInfo(result);
}

function ordenar() {
  if (!validate()) return;  // Validate before proceeding

  const values = document.getElementById('input').value.split(',').map(Number);
  values.sort((a, b) => a - b);
  document.getElementById('input').value = values.join(',');
  updateInfo('Sorted CSV');
}

function revertir() {
  if (!validate()) return;  // Validate before proceeding

  const values = document.getElementById('input').value.split(',').reverse();
  document.getElementById('input').value = values.join(',');
  updateInfo('Reversed CSV');
}

function quitar() {
  if (!validate()) return;  // Validate before proceeding

  const values = document.getElementById('input').value.split(',');
  values.pop();
  document.getElementById('input').value = values.join(',');
  updateInfo('Removed Last Element');
}

function updateInfo(result) {
  const info = document.getElementById('info');
  if (result < 100) {
    info.textContent = 'Info: The result is less than 100';
  } else if (result >= 100 && result <= 200) {
    info.textContent = 'Info: The result is between 100 and 200';
  } else {
    info.textContent = 'Info: The result is greater than 200';
  }
}

function validate() {
  const input = document.getElementById('input').value.trim();

  // Check if it's a valid integer or decimal number (positive or negative)
  const numberRegex = /^-?\d+(\.\d+)?$/;
  
  // Check if it's a valid CSV list of numbers
  const csvRegex = /^-?\d+(\.\d+)?(,-?\d+(\.\d+)?)*$/;

  if (numberRegex.test(input)) {
    return true;  // Valid number input
  } else if (csvRegex.test(input)) {
    return true;  // Valid CSV input
  } else {
    alert('Error: Invalid input. Please enter a valid number or a CSV list.');
    return false;  // Invalid input
  }
}

