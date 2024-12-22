// The messages to be typed dynamically
const message1 = "Someone aced their exams without studying.";
const message2 = "Click below to unleash your true potential.";

// Typing speed in milliseconds (faster and smooth)
const speed = 23;

// Indices to track progress of typing
let index1 = 0;
let index2 = 0;

// Function to type the first message
function typeMessage1() {
    if (index1 < message1.length) {
        document.getElementById('intro-message').textContent += message1[index1];
        index1++;
        setTimeout(typeMessage1, speed); // Continue typing
    } else {
        setTimeout(typeMessage2, 200); // Delay before second message
    }
}

// Function to type the second message
function typeMessage2() {
    if (index2 < message2.length) {
        document.getElementById('sub-message').textContent += message2[index2];
        index2++;
        setTimeout(typeMessage2, speed); // Continue typing
    } else {
        // Show the button once all text is typed
        document.getElementById('enter-btn').style.display = "block";
    }
}

// Handle the button click to show spinner and redirect
document.getElementById('enter-btn').addEventListener('click', function () {
    // Show the spinner
    document.getElementById('spinner-overlay').style.display = "flex";
    
    // Delay redirection by 1 second
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1000);
});

// Start typing when the page loads
window.onload = function () {
    typeMessage1(); // Start typing the first message
};
