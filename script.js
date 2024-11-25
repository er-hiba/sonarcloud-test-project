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
