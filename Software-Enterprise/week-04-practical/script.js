
"use strict";

// Task 2 and Task 4: Basic Event Handling and Error Handling

const inputField = document.getElementById("inputField");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.addEventListener("click", function () {
    // trim() removes whitespace from the beginning and end.
    let input = inputField.value.trim();

    if (input === "") {
        output.innerText = "Error: Input cannot be empty!";
    } else {
        output.innerText = "You entered: " + input;
    }
});


// Task 3: Event Delegation

const addBtn = document.getElementById("addBtn");
const buttonContainer = document.getElementById("buttonContainer");

let buttonCount = 0;

// Create a new button whenever Add New Button is clicked.
addBtn.addEventListener("click", function () {
    buttonCount++;

    let newButton = document.createElement("button");

    newButton.innerText = "New Button " + buttonCount;

    buttonContainer.appendChild(newButton);
});

// One listener handles clicks on all dynamically created buttons.
buttonContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        alert("You clicked " + event.target.innerText);
    }
});


// Task 5: Observer Pattern

let observers = [
    document.getElementById("observer1"),
    document.getElementById("observer2")
];

// Update every observer whenever the input changes.
inputField.addEventListener("input", function () {
    let value = this.value;

    observers.forEach(function (observer, index) {
        observer.innerText =
            "Observer " + (index + 1) + ": Updated with: " + value;
    });
});


// Task 6: Preventing Content Copying

const protectedText = document.getElementById("protectedText");
const copyStatus = document.getElementById("copyStatus");

// Prevent selecting text inside the protected paragraph.
protectedText.addEventListener("selectstart", function (event) {
    event.preventDefault();

    copyStatus.innerText = "Text selection is disabled.";
});

// Prevent copying text inside the protected paragraph.
protectedText.addEventListener("copy", function (event) {
    event.preventDefault();

    copyStatus.innerText = "Copying this text is disabled.";
});
