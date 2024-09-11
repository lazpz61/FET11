//Operators and Expressions


// Operators and Expressions
// Arithmetic Operators
let num1 = 10;
let num2 = 5;
console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);


console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % 6);

// Order of Operations
// PEMDAS/BODMAS
const answer = 3 + 4 * (5 - 2) ** 2 / 2;
console.log("Answer:", answer);

// 2. String Expressions or Concatenation
let greeting = "Hi";
let name = "John";
console.log(greeting + " " + name);

// 3. Comparison Operators
// type coersion: converts the data type if necessary
console.log("Equal to (==):", num1 == 10);
console.log("Equal to (==):", num1 == "10");


console.log("Not Equal to (==):", num1 != 10);
console.log("Not Equal to (==):", num1 != "10");


console.log("Strictly Equal to (==):", num1 === 10);
console.log("Strictly Equal to (==):", num1 === "10");

console.log("Strictly Not Equal to (==):", num1 !== 10);
console.log("Strictly Not Equal to (==):", num1 !== "10");

console.log("Greater Than (>):", 10 > 5);
console.log("Less Than (<):", 5 < 10);
console.log("Greater Than or Equal to (>=):", 10 >= 10);
console.log("Less Than or Equal to (<=):", 9 <= 10);

// 4. Logical Operators
// AND, OR, NOT
// &&, ||, !
let sunny = true;
let warm = true;

// AND: true if all the variables is set to true, otherwise false
console.log("Is it sunny AND warm?", sunny && warm);

// NOT: Invert the value of a boolean
console.log("NOT sunny?", !sunny);


// 5. Assignment Expressions
// Single Equal Sign (=): assigning a value to a variable.
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
// num3 = num3 + num4
num3 +=num4
console.log("The new value of num3:", num3)
//Computation: 10+ 5 = 15

// Subtraction Assignment (-=)
num3 -= num4
console.log("The new value of num3:", num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment (*=)
num3 *= num4
console.log("The new value of num3:", num3);
// Computation: 10 * 5 = 50


// Division Assignment (/=)
num3 /= num4
console.log("The new value of num3:", num3);
// Computation: 50/ 5 = 10





















