let userInputValue = document.getElementById("titleInput");
let reviewsContainer = document.getElementById("reviewsContainer");
let textArea = document.getElementById("reviewTextarea");

function addButton() {
    if (userInputValue.value === "") {
        alert("Enter valid text");
    } else {
        let h1Element = document.createElement("h1");
        h1Element.textContent = "Movie Title: " + userInputValue.value;
        h1Element.classList.add("review-container-title-heading");
        reviewsContainer.appendChild(h1Element);

        let pElement = document.createElement("p");
        pElement.textContent = "Review: " + textArea.value;
        pElement.classList.add("review-container-title-review");
        reviewsContainer.appendChild(pElement);

        let horizontalLine = document.createElement("hr");
        horizontalLine.classList.add("hr-line");
        reviewsContainer.appendChild(horizontalLine);
    }

    userInputValue.value = "";
    textArea.value = "";
}
