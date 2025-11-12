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

const recommendations = {
    "science-notebook": [
        { name: "Microscope", img: "images/microscope.png", desc: "Small lab microscope" },
        { name: "Calculator", img: "images/calculator.png", desc: "Scientific calculator" }
    ],
    "math-notebook": [
        { name: "Graph Ruler", img: "images/ruler.png", desc: "Precision ruler for graphs" },
        { name: "Compass", img: "images/compass.png", desc: "Math drawing compass" }
    ],
    // أضف منتجات أكثر حسب الحاجة
    };

    // دالة لعرض التوصيات
    function showRecommendations(productId) {
    const container = document.getElementById("recommendation-cards");
    container.innerHTML = ""; // مسح القديم
    if (recommendations[productId]) {
        recommendations[productId].forEach(item => {
        const card = document.createElement("div");
        card.className = "recommendation-card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
        });
    } else {
        container.innerHTML = "<p>No recommendations available for this product.</p>";
    }
    }
