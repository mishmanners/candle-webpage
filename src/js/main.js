// This file contains JavaScript code to create the flickering effect of the candlelight.

const candleFlame = document.querySelector('.candle-flame');

function flicker() {
    const randomOpacity = Math.random() * 0.3 + 0.7; // Random opacity between 0.7 and 1
    candleFlame.style.opacity = randomOpacity;
}

setInterval(flicker, 200); // Flicker every 200 milliseconds