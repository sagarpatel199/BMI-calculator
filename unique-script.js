function calculateUniqueBMI() {
var uniqueHeightInput = document.getElementById("unique-height");
var uniqueWeightInput = document.getElementById("unique-weight");
var uniqueResultDiv = document.getElementById("unique-result");

var uniqueHeight = parseFloat(uniqueHeightInput.value);
var uniqueWeight = parseFloat(uniqueWeightInput.value);

if (isNaN(uniqueHeight) || isNaN(uniqueWeight)) {
uniqueResultDiv.innerHTML = "Please enter a valid height and weight.";
return;
}

var uniqueBMI = uniqueWeight / ((uniqueHeight / 100) ** 2);
var uniqueCategory = "";

if (uniqueBMI < 18.5) {
uniqueCategory = "Underweight";
} else if (uniqueBMI < 25) {
uniqueCategory = "Normal weight";
} else if (uniqueBMI < 30) {
uniqueCategory = "Overweight";
} else {
uniqueCategory = "Obese";
}

uniqueResultDiv.innerHTML = "Your BMI is " + uniqueBMI.toFixed(2) + " (" + uniqueCategory + ")";
}