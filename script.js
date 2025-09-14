// ------------------------------
// Part 2: Functions, Scope & Return Values
// ------------------------------

// Simple addition function
function addNumbers(a, b) {
  return a + b;
}

// Global vs local scope demo
let globalNum = 10;

function multiplyByGlobal(x) {
  let localResult = x * globalNum;
  return localResult;
}

// Update DOM with results
const sumResult = document.getElementById("sumResult");
sumResult.textContent = `3 + 7 = ${addNumbers(3, 7)}`;

const scopeResult = document.getElementById("scopeResult");
scopeResult.textContent = `5 * global(10) = ${multiplyByGlobal(5)}`;

// Function with parameters triggered by button
const calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", () => {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  alert(`Random sum: ${num1} + ${num2} = ${addNumbers(num1, num2)}`);
});


// ------------------------------
// Part 3: Combining CSS + JavaScript
// ------------------------------

// Animate box
const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");
animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// Modal functionality
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModal = document.getElementById("closeModal");

toggleModalBtn.addEventListener("click", () => modal.classList.add("show"));
closeModal.addEventListener("click", () => modal.classList.remove("show"));

// Dark mode toggle
const toggleDarkMode = document.getElementById("toggleDarkMode");
toggleDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// ------------------------------
// Bonus: Loader Spinner
// ------------------------------
const loader = document.getElementById("loader");
const showLoaderBtn = document.getElementById("showLoaderBtn");

showLoaderBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  setTimeout(() => loader.classList.add("hidden"), 3000); // hides after 3s
});
