const resultButtonElement = document.getElementById("result-btn");
const weightInputElement = document.getElementById("weight");
const heightInputElement = document.getElementById("height");
const outputBMIResult = document.getElementById("BMI-result");

function getBMI() {
  const valueOfWeightInput = weightInputElement.value;
  const valueOfHeightInput = heightInputElement.value;

  const bmiResult = valueOfWeightInput / (valueOfHeightInput / 100) ** 2;
  const bmiResultFixed = bmiResult.toFixed(2);
  outputBMIResult.innerHTML = "BMI(kg/m2): " + bmiResultFixed;
  outputBMIResult.style.marginBottom = "2rem";
  outputBMIResult.style.display = "block";
}

resultButtonElement.addEventListener("click", getBMI);
