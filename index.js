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
// let numbers = [];

// for (let i = 0; i < 10; i++) {
//   const number = document.createElement("p"); //number isn't a dom yet? what?
//   // number.textContent = `${i}`; //why don't I see this?
//   // number.style.cssText = "display: inline";
//   number.classList.add("num");
//   numbers.push(number);
// }

const display = document.querySelector(".display");

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

for (let i = 0; i < btnsArr.length; i++) {
  btnsArr[i].addEventListener(
    "click",
    () => (display.textContent += btnsArr[i].textContent)
  );
}
