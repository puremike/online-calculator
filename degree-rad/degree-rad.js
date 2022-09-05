const resultButtonElement = document.getElementById("result-btn");
const inputButtonElement = document.getElementById("degree");
const paragraphElement = document.getElementById("result");
const π = 3.142;

function convertDegToRadian() {
  const inputValue = inputButtonElement.value;
  const valueInRadian = inputValue * (π / 180);
  const valueInRadianWithPie = inputValue / 180;

  paragraphElement.innerHTML =
    valueInRadianWithPie.toFixed(1) +
    "π radian / " +
    valueInRadian.toFixed(3) +
    " radian";
  paragraphElement.style.display = "block";
}

resultButtonElement.addEventListener("click", convertDegToRadian);
