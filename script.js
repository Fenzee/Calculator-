function updateDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}