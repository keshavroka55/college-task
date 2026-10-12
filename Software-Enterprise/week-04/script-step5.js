document.getElementById('submitBtn').addEventListener('click', function () {
    let input = document.getElementById('inputField').value;
    if (input === "") {
        document.getElementById('output').innerText = "Error: Input cannot be empty!";
    } else {
        document.getElementById('output').innerText = "You entered: " + input;
    }
});

// Observer pattern implementation
let observers = [];

// Function to add an observer (e.g., a button)
function addObserver(observer) {
    observers.push(observer);
}

// Notify all observers when the input field changes
document.getElementById('inputField').addEventListener('input', function () {
    let value = this.value;
    observers.forEach(function (observer) {
        observer.innerText = "Updated with: " + value;
    });
});

// Adding buttons as observers
let btn1 = document.createElement('button');
btn1.innerText = "Observer 1";
document.getElementById('buttonContainer').appendChild(btn1);
addObserver(btn1);

let btn2 = document.createElement('button');
btn2.innerText = "Observer 2";
document.getElementById('buttonContainer').appendChild(btn2);
addObserver(btn2);


