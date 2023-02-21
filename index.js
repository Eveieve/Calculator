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
    return acc;
  } else if (storedOp === "-") {
    acc = subtract(previous, curr);
    console.log(acc);
    return acc;
  } else if (storedOp === "*") {
    acc = multiply(previous, curr);
    console.log(acc);
    return acc;
  } else if (storedOp === "/") {
    acc = divide(previous, curr);
    console.log(acc);
    return acc;
  } else console.log("ERROR!");
}

const display = document.querySelector(".display");
display.textContent = "0";
display.style.cssText =
  "overflow: hidden; display:flex; align-items: center; flex-direction: row-reverse; color:  rgb(30, 64, 128);padding-right: 0.6rem; font-size: 2.2rem; font-family: monospace";

const btns = document.querySelectorAll(".buttons .num");
const btnsArr = Array.from(btns);

//delete last digit when clicked

function deleteNum() {
  console.log("delete");
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
  if (acc === undefined) {
    previous = Number(display.textContent);
  } else if (acc !== undefined) {
    acc = Number(display.textContent);
  }
}

function getNum() {
  if (previous === undefined || storedOp === undefined) {
    if (previous === undefined) display.textContent = "";
    display.textContent += this.textContent;
    deleteBtn.addEventListener("click", deleteNum);

    previous = Number(display.textContent);
    console.log(previous);
  } else if (previous !== undefined && storedOp !== undefined) {
    if (curr === undefined) display.textContent = "";

    display.textContent += this.textContent;
    deleteBtn.addEventListener("click", deleteNum);
    curr = Number(display.textContent);
    console.log(curr);
  }
  checkDecimal();
}

btnsArr.forEach((num) => num.addEventListener("click", getNum));

let ops = document.querySelectorAll(".buttons .op");
let opsArr = Array.from(ops);

let storedOp;

function getOp() {
  if (previous !== undefined && curr === undefined) {
    storedOp = this.textContent;
    console.log(storedOp);
    return storedOp;
  } else if (curr !== undefined && acc !== undefined) {
    if (storedOp === "/" && curr === 0) {
      display.textContent = "Nope!";
    } else {
      console.table({ storedOp, acc, curr });
      operate(storedOp, acc, curr);
      display.textContent = Number(acc.toFixed(7));
      console.log(acc);
      curr = undefined;
    }
  } else if (acc === undefined) {
    if (storedOp === "/" && curr === 0) {
      display.textContent = "Nope!";
    } else {
      console.table({ storedOp, previous, curr });
      operate(storedOp, previous, curr);
      display.textContent = Number(acc.toFixed(7));
      console.log(acc);
      curr = undefined;
    }
  } else if (acc !== undefined) {
    if (storedOp === "/" && curr === 0) {
      display.textContent = "Nope!";
    } else {
      console.table({ storedOp, acc, curr });
      operate(storedOp, acc, curr);
      display.textContent = Number(acc.toFixed(7));
      console.log(acc);
      curr = undefined;
    }
  }
}

opsArr.forEach((operator) => operator.addEventListener("click", getOp));

const equal = document.querySelector(".equal");

equal.addEventListener("click", () => {
  if (acc === undefined) {
    console.table({ storedOp, previous, curr });
    operate(storedOp, previous, curr);
    if (storedOp === "/" && curr === 0) {
      console.log("zero?");
      display.textContent = "Nope!";
    } else {
      display.textContent = Number(acc.toFixed(7));
      console.log(acc);
      curr = undefined;
    }
  } else if (acc !== undefined) {
    console.table({ storedOp, acc, curr });
    if (storedOp === "/" && curr === 0) {
      display.textContent = "Nope!";
    } else {
      operate(storedOp, acc, curr);
      display.textContent = Number(acc.toFixed(7));
      console.log(acc);
      curr = undefined;
    }
  }
});

const cancelBtn = document.querySelector(".cancelBtn");

function cancelCalc() {
  display.textContent = "0";
  //clear all previous input
  previous = undefined;
  storedOp = undefined;
  acc = undefined;
  curr = undefined;
}

cancelBtn.addEventListener("click", cancelCalc);

function checkDecimal() {
  if (display.textContent.includes(".")) {
    document.getElementById("decimal").disabled = true;
  } else document.getElementById("decimal").disabled = false;
}

const deleteBtn = document.querySelector(".delete");
