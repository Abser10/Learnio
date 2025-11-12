// This script should be included in index.html with a script tag.
// Example: <script src="voice.js"></script>
// Make sure to call this function after the DOM is loaded.

function askTimeAndGreet() {
    let message = prompt("Enter your time (0-23): ");
    let currentHours = Number(message);

    if (currentHours >= 0 && currentHours < 12) {
        alert("Good Morning");
    } else if (currentHours >= 12 && currentHours < 16) {
        alert("Afternoon");
    } else if (currentHours >= 16 && currentHours < 24) {
        alert("Evening");
    } else {
        alert("The Time is Error");
    }
}

// Optionally, you can call askTimeAndGreet() on a button click from your HTML page.
// Example HTML:
// <button onclick="askTimeAndGreet()">Check Greeting</button>