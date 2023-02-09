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
    return add(previousNum, currNum);
  } else if (storedOp === "-") {
    return subtract(previousNum, currNum);
  } else if (storedOp === "*") {
    return multiply(previousNum, currNum);
  } else if (storedOp === "/") {
    return divide(previousNum, currNum);
  } else console.log("ERROR!");
}

const display = document.querySelector(".display");

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

function getNum() {
  if (previousNum === undefined) {
    display.textContent = this.textContent;
    previousNum = Number(this.textContent);
    // console.log(previousNum);
  } else {
    display.textContent = this.textContent;
    currNum = Number(this.textContent);
    // console.log(currNum);
  }
}

// for (let i = 0; i < btnsArr.length; i++) {
//   btnsArr[i].addEventListener("click", getNum);
// }

btnsArr.forEach((num) => num.addEventListener("click", getNum));

let ops = document.querySelectorAll(".buttons .op");
let opsArr = Array.from(ops);

let storedOp;

function getOp() {
  storedOp = this.textContent;
  console.log(storedOp);
}

opsArr.forEach((operator) => operator.addEventListener("click", getOp));

const equal = document.querySelector(".equal");
// console.log(equal);
equal.addEventListener("click", operate);
