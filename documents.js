/*
Problem Statement: You are tasked with creating a web page that dynamically updates its content based on user interaction. The page should utilize 
JavaScript to manipulate the document structure and content using arrays and objects.

Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
Task 2: Write a function to display the product information on the webpage dynamically.

Task 3: Implement an event listener to trigger the display of products when the page loads.
*/

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts (productList) {
    const container = document.getElementById("productContainer");

    productList.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = "Price = $" + product.price;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        container.appendChild(productDiv);        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products); // Display products once the page is fully loaded
});


