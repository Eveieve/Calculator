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

let previous;
let curr;
let acc;

function operate(storedOp, previous, curr) {
  if (storedOp === "+") {
    acc = add(previous, curr);
    console.log(acc);
    display.textContent = acc;
  } else if (storedOp === "-") {
    acc = subtract(previous, curr);
    console.log(acc);
    display.textContent = acc;
  } else if (storedOp === "*") {
    acc = multiply(previous, curr);
    console.log(acc);
    display.textContent = acc;
  } else if (storedOp === "/") {
    acc = divide(previous, curr);
    console.log(acc);
    display.textContent = acc;
  } else console.log("ERROR!");
}

const display = document.querySelector(".display");

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

function getNum() {
  if (previous === undefined || storedOp === undefined) {
    display.textContent += this.textContent;
    let finalNum = Number(display.textContent);
    previous = finalNum;
    console.log(previous);
  } else {
    display.textContent += this.textContent;
    curr = Number(this.textContent);
    console.log(curr);
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

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  if (acc === undefined) {
    console.table({ storedOp, previous, curr });
    operate(storedOp, previous, curr);
  } else if (acc !== undefined) {
    console.table({ storedOp, acc, curr });
    operate(storedOp, acc, curr);
  }
});
