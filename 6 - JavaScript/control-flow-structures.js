//Control Flow Structures


//1. Conditional Statements
// Allows us to execute a block of code based on a condition.


//Conditional: uf, else if, else statements
// () - Conditional Block
// {} - Code Block
let temperature = 35;
if (temperature < 0){
    console.log("It's freezing!");
    console.log("Wear a Jacket!");
} else if(temperature >=0 && temperature < 20){
    //Range: 0 - 19
    console.log("It's cool outside");
} else if (temperature >= 20 && temperature < 30){
    //Range: 20 - 29
    console.log("Its warm outside.")
} else {
    console.log("It's hot outside")
}

// Conditional: switch-case statement
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week!");
        break;
    case "Friday":
        console.log("It's the end of the week days.");
        break;
    default:
        console.log("It's just a regular day.");
}

// 2. Looping Statement
// Repeatedly execute a block of code until a specific condition is not met.
// For Loop
/*
    1. Variable Initialization
    2. Condition Expression
    3. Increment/Decrement
*/ 
for (let i = 1; i <= 3; i++){
    console.log("For Loop Count:", i);
}

//While Loop
let count = 1;
while (count <=3){
    console.log("While Loop Count:", count);
    count++;
}

// Do-while Loop
let counter =1;
do {
    console.log("Do while loop count:", counter);
    counter++;
} while (counter <=3);

