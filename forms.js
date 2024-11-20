/*
Problem Statement: You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize 
JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.

Task 1: Create an HTML form with input fields for the user's name, email, and message.

Task 2: Write JavaScript code to handle form submissions and store user input in an object.

Task 3: Implement form validation to ensure that all required fields are filled before submission.
*/

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if (!name || !email ||!message) {
    document.getElementById("confirmation").innerHTML = "<p style='color: red;'>Please fill out all fields.</p>";
} else {
    const userInput = {
        name: name,
        email: email,
        message: message
    };

    document.getElementById("confirmation").innerHTML = 
    "<h3>Thank you for your submission!</h3>" +
    "<p>Name: " + userInput.name + "</p>" +
    "<p>Email: " + userInput.email + "</p>" +
    "<p>Message: " + userInput.message + "</p>";
}

});