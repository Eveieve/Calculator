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
  if (storedOp === "+") {
    console.log(add(previousNum, currNum));
  } else if (storedOp === "-") {
    console.log(subtract(previousNum, currNum));
  } else if (storedOp === "*") {
    console.log(multiply(previousNum, currNum));
  } else if (storedOp === "/") {
    console.log(divide(previousNum, currNum));
  } else console.log("ERROR!");
}

const display = document.querySelector(".display");

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

function getNum() {
  if (previousNum === undefined) {
    display.textContent = this.textContent;
    previousNum = Number(this.textContent);
    console.log(previousNum);
  } else {
    display.textContent = this.textContent;
    currNum = Number(this.textContent);
    console.log(currNum);
  }
}

btnsArr.forEach((num) => num.addEventListener("click", getNum));

let ops = document.querySelectorAll(".buttons .op");
let opsArr = Array.from(ops);

let storedOp;

function getOp() {
  storedOp = this.textContent;
  console.log(storedOp);
}

opsArr.forEach((operator) => operator.addEventListener("click", getOp));
console.log(storedOp);
const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  console.table({ storedOp, previousNum, currNum });
  operate(storedOp, previousNum, currNum);
});
// equal.addEventListener("click", () => {
//   operate(storedOp, previousNum, currNum);
// });
