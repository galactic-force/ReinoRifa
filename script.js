const myButton = document.getElementById("myButton");
const imageContainer = document.getElementById("imageContainer");

myButton.addEventListener("click", function() {
    // Create an image element
    const image = document.createElement("img");
    image.src = "path/to/your/image.jpg"; // Replace with the actual image path
    image.alt = "Replaced Image";

    // Hide the button and show the image
    myButton.style.display = "none";
    imageContainer.appendChild(image);
});
