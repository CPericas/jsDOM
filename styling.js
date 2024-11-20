/*
Problem Statement: You are tasked with creating a web page that demonstrates dynamic styling using JavaScript. The page should include HTML 
elements that change their appearance in response to user actions or events triggered by JavaScript functions.

Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

<div id="box" onclick="changeColor()">Click me to change color</div>
Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.
*/

function changeColor() {
    const box = document.getElementById("box");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
    box.textContent = "Color Changed!";
}

function changeShape(element) {
    element.style.borderRadius = "0";
    element.style,backgroundColor = "purple";
}

function resetShape(element) {
    element.style.borderRadius = "50%";
    element.style,backgroundColor = "orange";
}

function toggleVisibility() {
    const box = document.getElementById("box");
    if (box.style.display ==="none") {
        box.style.display = "block";
    } else {
        box.style.display = "none"
    }
}

const text = document.getElementById("text");

text.addEventListener("mouseover", function () {
    text.style.color = "red";
    text.style.fontSize = "24px";
});

text.addEventListener("mouseout", function () {
    text.style.color = "black";
    text.style.fontSize = "16px";
});

function resetStyles() {
    const box = document.getElementById("box");
    box.style.backgroundColor = "lightblue";
    box.textContent = "Click me and change the color.";
    box.style.display = "block";

    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        circle.style.borderRadius = "50%";
        circle.style.backgroumdcolor = "orange";
    });

    text.style.color = "black"
    text.style.fontSize = "16px"
}