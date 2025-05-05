let display = document.querySelector(".display");
let number = document.querySelectorAll(".numbers");
let operator = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let dot = document.querySelector(".dot");
let reminder = document.querySelector(".remainder");
let currentValue = "";
let num1 = 0;
let num2 = 0;
let operatorValue = "";
let currentValue2 = "";
let gate = false;

//event listener for numbers button
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {
        currentValue += e.target.innerText;
        console.log(currentValue);
        display.innerText = currentValue; // Display the number
        if (gate) {
            currentValue2 += e.target.innerText;
        }
    })
}

//event listener for clear button
clear.addEventListener("click", function() {

    display.innerText = "0"; // Clear the display
    gate = false;
    currentValue = ""; // Reset the current value
    currentValue2 = ""; // Reset the second value
    operatorValue = ""; // Reset the operator value
})

//event listener for operator button
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {
        gate = true;
        if (currentValue !== "") {
            num1 = parseFloat(currentValue); // Get the first number
            operatorValue = e.target.innerText; // Get the operator
            currentValue += operatorValue; // Append the operator to the current value
            display.innerText = currentValue; // Display the current value with operator
        }
        console.log(operatorValue);
    })
}

//event listener for equal button
equal.addEventListener("click", function() {
    if (currentValue !== "") {

        num2 = parseFloat(currentValue2);
        console.log(num1, num2);
        console.log(operatorValue);
        switch (operatorValue) {
            case "+":
                display.innerText = num1 + num2; // Perform addition
                num1 = num1 + num2; // Update num1 for further calculations
                currentValue = num1.toString(); // Update currentValue to the result
                currentValue2 = ""; // Reset the second value
                break;
            case "−":
                display.innerText = num1 - num2; // Perform subtraction
                num1 = num1 - num2; // Update num1 for further calculations
                currentValue = num1.toString(); // Update currentValue to the result
                currentValue2 = ""; // Reset the second value
                break;
            case "×":
                display.innerText = num1 * num2; // Perform multiplication
                num1 = num1 * num2; // Update num1 for further calculations
                currentValue = num1.toString(); // Update currentValue to the result
                currentValue2 = ""; // Reset the second value
                break;
            case "÷":
                display.innerText = num1 / num2; // Perform division
                num1 = num1 / num2; // Update num1 for further calculations
                currentValue = num1.toString(); // Update currentValue to the result
                currentValue2 = ""; // Reset the second value
                break;
            case "%":
                display.innerText = num1 % num2; // Perform modulus
                num1 = num1 % num2; // Update num1 for further calculations
                currentValue = num1.toString(); // Update currentValue to the result
                currentValue2 = ""; // Reset the second value
                break;
            default:
                display.innerText = "Error"; // Handle invalid operator
                break;
        };
    }

})

reminder.addEventListener("click", function(e) {
    gate = true;
    if (currentValue !== "") {
        num1 = parseFloat(currentValue); // Get the first number
        operatorValue = e.target.innerText; // Get the operator
        currentValue += operatorValue; // Append the operator to the current value
        display.innerText = currentValue; // Display the current value with operator

    }
    console.log(operatorValue);
})