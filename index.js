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

let previousNum;
let currNum;

function operate(storedOp, previousNum, currNum) {
  if (storedOp == "+") {
    return add(previousNum, currNum);
  } else if (storedOp == "-") {
    return subtract(previousNum, currNum);
  } else if (storedOp == "*") {
    return multiply(previousNum, currNum);
  } else if (storedOp == "/") {
    return divide(previousNum, currNum);
  } else console.log("ERROR!");
}

const display = document.querySelector(".display");

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

for (let i = 0; i < btnsArr.length; i++) {
  btnsArr[i].addEventListener("click", () => {
    display.textContent = btnsArr[i].textContent;
    previousNum = Number(btnsArr[i].textContent);
    console.log(previousNum);
  });
}

for (let k = 0; k < btnsArr.length; k++) {
  btnsArr[k].addEventListener("click", () => {
    display.textContent = btnsArr[k].textContent;
    currNum = Number(btnsArr[k].textContent);
    console.log(currNum);
  });
}

let ops = document.querySelectorAll(".buttons .op");
let opsArr = Array.from(ops);

let storedOp;

ops.forEach((operator) =>
  operator.addEventListener("click", () => {
    storedOp = operator.textContent;
    console.log(storedOp);
  })
);

const equal = document.querySelector(".equal");
// console.log(equal);
equal.addEventListener("click", operate);
