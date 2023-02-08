function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if ((operator = "+")) {
    return add(a, b);
  } else if ((operator = "-")) {
    return subtract(a, b);
  } else if ((operator = "*")) {
    return multiply(a, b);
  } else if ((operator = "/")) {
    return divide(a, b);
  }
}
const display = document.querySelector(".display");

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

let storedNum;

for (let i = 0; i < btnsArr.length; i++) {
  btnsArr[i].addEventListener("click", () => {
    display.textContent += btnsArr[i].textContent;
    storedNum = Number(btnsArr[i].textContent);
    console.log(storedNum);
  });
}
