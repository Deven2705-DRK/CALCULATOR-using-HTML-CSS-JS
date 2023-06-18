# CALCULATOR-using-HTML-CSS-JS
ADVANCE CALCULATOR using HTML , CSS , JS

Script contain :-

addToScreen(value): This function is called when a button on the calculator is clicked. It takes the clicked button's value as input and appends it to the current value displayed on the calculator screen. If the value is 'sqrt', it adds a square root symbol (√) to the expression.

Calculate(): This function is called when the equal (=) button is clicked. It evaluates the expression entered in the calculator using the eval() function, which can parse and execute mathematical expressions. However, it also checks if the input represents a square root expression using the isSquareRoot() function. If it is a square root expression, it calls the squareRoot() function to calculate the square root separately.

isSquareRoot(expression): This function checks if the given expression starts with the square root symbol (√) and ends with a closing parenthesis. It returns true if it's a square root expression, false otherwise.

squareRoot(expression): This function calculates the square root of the number inside the square root expression. It extracts the number from the expression using parseFloat() and slice(), calculates the square root using Math.sqrt(), and updates the answer field with the result.

deleteChar(): This function is called when the backspace button is clicked. It removes the last character from the expression displayed on the calculator screen.

signConvo(): This function is called when the plus/minus sign button is clicked. If the answer field has a valid number, it converts its sign (positive to negative or vice versa). Otherwise, it attempts to convert the signs of the numbers in the expression by replacing them using a regular expression.

clearScreen(): This function is called when the clear (C) button is clicked. It clears both the history and answer fields, resetting the calculator.
