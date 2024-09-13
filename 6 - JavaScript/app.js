//Arrays
let fruits = ["Apple","Banana", "Cherry"]
console.log("Length of Fruits:", fruits.length);

console.log("Fruits:", fruits);

console.log("First Fruit:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1])

// .slice(): access a portion of the array
// 1st Parameter: starting index
// 2nd Parameter: element not included
let slicedFruits = fruits.slice(0, 2);
console.log("Sliced Fruits:", slicedFruits);
console.log("Fruits:", fruits);

//Update element
fruits[0] = "Avocado";
console.log(fruits)

// Adding new elements
// .push(): add an element at the end of the array
fruits.push("Dewberry");
console.log("Pushing Fruits:", fruits);

// .splice(): add or delete element(s) inside of the array
// 1st Parameter: starting index
// 2nd Parameter: delete count
// 3rd Parameter: element(s) you want to add
fruits.splice(2, 0, "Mango");
console.log("Splicing Fruits:", fruits);

// Delete element(s)
// .pop(): delete an element at the end of the array
fruits.pop();
console.log("Pop Fruits:", fruits);

// .splice(): add or delete element(s) inside of the array
// 1st Parameter: starting index
// 2nd Parameter: delete count
// 3rd Parameter: element(s) you want to add
fruits.splice(2,1);
console.log("Splicing a specific Fruit:", fruits);

//Searching element(s)
// .includes(element): check if an element exists inside the array.
console.log("Is Banana included",fruits.includes("Banana"));



// .indexOf(element): find the index of an element
let indexOfBanana = fruits.indexOf("Banana");
console.log("Index of Banana:", indexOfBanana);
let indexOfMango = fruits.indexOf("Mango");
console.log("Index of Mango:", indexOfMango);

// .forEach(): execute a function to each of the element of the array
fruits.forEach(function (fruit){
    console.log("Fruit:", fruit);
})







// let veggies = ["Carrot","Lettuce"]
// fruits.forEach(element => {
//     element.toUpperCase
// });
// console.log(fruits)

// let methodTestConcat = fruits.concat(veggies)

// console.log(methodTestConcat)
