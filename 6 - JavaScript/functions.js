// Functions
// Reusable block of code that can be executed whenever needed.
function greet() {
    console.log("Hello! And welcome to world of functions!");
    console.log("Let's go!!");
}

//Calling a Function
greet();
greet();
greet();

// Function with parameters
//Paramters -  placeholder
function sum(num1, num2){
    console.log("Calculating the value...")
    return num1 + num2;
}

// Calling a function with paramters
//Arguments  - values passed to the function paramters
console.log("Sum",sum(30,20));
console.log("Sum",sum(10,5));

