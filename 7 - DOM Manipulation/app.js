// Document Object Model (DOM)
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

// Modify the .textContent property
elementWithID.textContent = "Div 1";

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements accessed using Class:", elementsWithClass);

//Modify the .textContent property
elementsWithClass[1].textContent = "Div2"

//Accessing element by tagname
let listItems = document.getElementsByTagName("li");
console.log("Element acced using Tag name:", listItems)

// Modify the .color and .backgroundColor property
listItems[2].style.color = "tomato";
listItems[2].style.backgroundColor = "beige";

// .querySelector()
// Access the first element
// .classname, #id, tagname
let heading = document.querySelector("h3");
console.log("Elements accessed using Query Selector:", heading);
// Modify the .color and .backgroundColor property
heading.style.color = "aqua";
heading.style.backgroundColor = "orange";

// .querySelectorAll()
// .classname, #id, tagname
let orderedLists = document.querySelectorAll(".ordered-list");
console.log("Elements accessed using Query Selector All:",orderedLists)

// Modify the .color and .backgroundColor property
orderedLists[1].style.color = "green"
orderedLists[1].style.backgroundColor = "yellow"


for (i = 0;i < orderedLists.length; i++){
    let orderedList = orderedLists[i];
    orderedList.style.color = "red"
    orderedList.style.backgroundColor = "aqua"

}
//Update the elements attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png")

//Appending New Elements
let parentElement =  document.querySelector("#parent-element");
let createdDivElement = document.createElement("div");
createdDivElement.textContent = "Child Element";
parentElement.appendChild(createdDivElement)

// Delete an Element
let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove()


// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function (){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode";
});
