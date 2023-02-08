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
    console.log(previousNum);
  } else {
    display.textContent = this.textContent;
    currNum = Number(this.textContent);
    console.log(currNum);
  }
}

<<<<<<< HEAD
for (let k = 0; k < btnsArr.length; k++) {
  btnsArr[k].addEventListener("click", () => {
    display.textContent = btnsArr[k].textContent;
    currNum = Number(btnsArr[k].textContent);
    console.log(currNum);
  });
} // how do I make it not run at the same time?
=======
for (let i = 0; i < btnsArr.length; i++) {
  btnsArr[i].addEventListener("click", getNum);
}
>>>>>>> 7648601 (Store previous number and current number)

let ops = document.querySelectorAll(".buttons .op");
let opsArr = Array.from(ops);

let storedOp;

<<<<<<< HEAD
ops.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    storedOp = e.target.textContent;
    console.log(storedOp);
  })
);
=======
function getOp() {
  storedOp = this.textContent;
  console.log(storedOp);
}
ops.forEach((operator) => operator.addEventListener("click", getOp));
>>>>>>> 7648601 (Store previous number and current number)

const equal = document.querySelector(".equal");
// console.log(equal);
equal.addEventListener("click", operate);
