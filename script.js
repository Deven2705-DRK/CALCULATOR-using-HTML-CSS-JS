var historyInput = document.getElementById("history");

// Function to add a value to the input field
function addToScreen(value) {
  var currentHistory = historyInput.value;
  // Its better to use square function at the end.but if you want first to take more numbers just remove '"    +')'    "'
  if (value === 'sqrt') {
    currentHistory = '√(' + currentHistory + ')'; //  √
  }
  else {
    currentHistory += value;
  }
  historyInput.value = currentHistory;
  return currentHistory;
}

// Function to evaluate the expression using math.js
function Calculate() {
  var history = historyInput.value;
  if (isSquareRoot(history)) {
    squareRoot(history);
  } else {
    console.log("Invalid input in calculate");
  }
  try {
    var answer = eval(history);
    document.getElementById("answer").value = answer;
    /* i want to use switch insted eval */
  } catch (error) {
    document.getElementById("answer").value = "Error";
  }
}

// Check if the input represents a square root expression
function isSquareRoot(expression) {
  return expression.startsWith("√(") && expression.endsWith(")");
}
function squareRoot(expression) {
  var number = parseFloat(expression.slice(2, expression.length - 1));

  if (!isNaN(number)) {
    var sqrtValue = Math.sqrt(number);
    document.getElementById("answer").value = sqrtValue;
    document.getElementById("answer") = sqrtValue; //    ////////document.getElementById("answer")
  } else {
    console.log("Invalid number in sqrt fun");
  }
  historyInput.value = expression;
}

// Function to delete a single character at a time.
function deleteChar() {
  var history = historyInput.value;
  if (history.length == 1) {
    document.getElementById("answer").value = "0"
  }
  historyInput.value = history.substr(0, history.length - 1);
}

// Function to convert sign in answer.
function signConvo() {
  var answer = parseFloat(document.getElementById("answer").value);

  if (!isNaN(answer)) {
    answer = -answer;
    document.getElementById("answer").value = answer;
  } else {
    var currentHistory = historyInput.value;
    currentHistory = currentHistory.replace(/(-)?\d+(\.\d+)?/g, function (match, sign) {
      return sign ? match.slice(1) : '-' + match;
    });
    historyInput.value = currentHistory;
  }
}


// Function to clear the input field.
function clearScreen() {
  historyInput.value = "";
  document.getElementById("answer").value = "";
}