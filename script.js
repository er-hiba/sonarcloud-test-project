// Unused variable
let unusedVar = 42;

// Hardcoded credentials (Security Issue)
const API_KEY = "12345-SECRET-KEY";

// Function with no return type consistency
function addNumbers(a, b) {
  if (a > 0) {
    return a + b;
  }
}

// Duplicate code
function duplicateFunction() {
  console.log("This is duplicate code");
}
duplicateFunction();
duplicateFunction();

// Nested loops (inefficient)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(i * j);
  }
}

// Unhandled promise
fetch('https://example.com/api')
  .then(response => response.json());








// Syntax Errors
function missingParenthesis( {
  console.log("This function is missing a closing parenthesis");
}

// Unused Variable
let unusedVariable = "I am never used!"; // Should be flagged as an unused variable

// Example Function
function addNumbers(a, b) {
  return a + b; // A simple function with no validation
}

/* Simulated Tests: Add coverage comments here */
// Example of testing addNumbers function with comments
// addNumbers(3, 4); // Simulated: Should return 7
// addNumbers(-1, 5); // Simulated: Should return 4

// Poor Error Handling
function divideNumbers(a, b) {
  return a / b; // No check for division by zero
}

/* Simulated Tests: Check edge cases */
// divideNumbers(10, 2); // Simulated: Should return 5
// divideNumbers(10, 0); // Simulated: Should throw an error (division by zero)

// Hardcoded Credentials
const apiKey = "123456"; // Should be flagged as hardcoded sensitive information

// Cyclomatic Complexity
function complexCondition(a, b, c) {
  if (a > 0) {
    if (b > 0) {
      return a + b;
    } else if (c > 0) {
      return a + c;
    } else {
      return c - b;
    }
  } else {
    return b - c;
  }
}

/* Simulated Tests: Cover all conditions */
// complexCondition(1, 2, 3); // Simulated: Covers first branch
// complexCondition(-1, 0, 5); // Simulated: Covers second branch

// Code Duplication
function duplicateFunction1(a) {
  return a * 2; // Simple duplication example
}

function duplicateFunction2(a) {
  return a * 2; // Same as duplicateFunction1
}

/* Simulated Tests: Highlight duplication */
// duplicateFunction1(4); // Simulated: Should return 8
// duplicateFunction2(5); // Simulated: Should return 10

// Example of Multiple Return Statements Without Validation
function processUserData(data) {
  if (data.isValid) {
    return data; // Early return without further checks
  } else if (data.isInValid) {
    return null; // Another return
  }
}

// Simulated Tests: Test the processUserData function
// processUserData({isValid: true}); // Simulated: Returns data
// processUserData({isInValid: true}); // Simulated: Returns null

// Code with Nested Loops That Could Be Refactored
function findCommonElements(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
      }
    }
  }
  return common;
}

/* Simulated Tests: Test findCommonElements */
// findCommonElements([1, 2, 3], [3, 4, 5]); // Simulated: Should return [3]

// Deprecated Code
var oldMethod = function() {
  console.log("This is deprecated");
}; // Should be flagged as using deprecated code

// Too Many Arguments in a Function
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

/* Simulated Tests: Test sum function */
// sum(1, 2, 3, 4, 5); // Simulated: Should return 15

// Function with No Return Value (Should return undefined warning)
function noReturn(a, b) {
  a + b; // No return, undefined should be flagged
}

// Global Variable Usage
var globalVar = "This is a global variable"; // Should be flagged as a global variable

// Simulated Tests: Test global variable
// console.log(globalVar); // Simulated: Prints the global variable
















