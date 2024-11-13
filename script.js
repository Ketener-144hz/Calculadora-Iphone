const display = document.getElementById("display");
let currentValue = "";
let currentOperation = null;

function appendNumber(number) {
  if (display.textContent === "0" || currentValue === "error") {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
  currentValue += number;
}

function clearDisplay() {
  display.textContent = "0";
  currentValue = "";
  currentOperation = null;
}

function setOperation(operation) {
  if (currentValue === "" && currentOperation === null) return;
  display.textContent += " " + operation + " ";
  currentValue += operation;
  currentOperation = operation;
}

function calculate() {
  try {
    display.textContent = eval(currentValue);
    currentValue = display.textContent;
  } catch (error) {
    display.textContent = "error";
    currentValue = "";
  }
  currentOperation = null;
}

function deleteLastChar() {
  if (currentValue.length > 0) {
    currentValue = currentValue.slice(0, -1);
    display.textContent = currentValue || "0";
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9\.]/.test(key)) {
    appendNumber(key);
  }

  if (["+", "-", "*", "/", "Enter", "=", "Backspace"].includes(key)) {
    if (key === "Enter" || key === "=") {
      calculate();
    } else if (key === "Backspace") {
      deleteLastChar();
    } else {
      setOperation(key);
    }
  }

  if (key === "c" || key === "C") {
    clearDisplay();
  }
});

// Made by Ketener
