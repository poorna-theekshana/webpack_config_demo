import './style.css';

console.log('JavaScript is running');

// Handle text color change
const colorChangeBtn = document.getElementById('colorChangeBtn');
const titleText = document.getElementById('titleText');
let colors = ['red', 'green', 'blue', 'black'];
let currentIndex = 0;

colorChangeBtn.addEventListener('click', () => {
  // Cycle through colors
  currentIndex = (currentIndex + 1) % colors.length;
  titleText.style.color = colors[currentIndex];
});

// Handle counter increment
const incrementBtn = document.getElementById('incrementBtn');
const counter = document.getElementById('counter');
let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
