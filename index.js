/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById("converter-length");
let volumeEl = document.getElementById("converter-volume");
let massEl = document.getElementById("converter-mass");
const convertBtnEl = document.getElementById("convert-btn");
const convertInEl = document.getElementById("convert-input");

function convert(num) {
  const metersToFeet = num * 3.281;
  const feetToMeters = num / 3.281;
  const litersToGallons = num * 0.264;
  const gallonsToLiters = num / 0.264;
  const kilogramsToPounds = num * 2.204;
  const poundsToKilograms = num / 2.204;
  lengthEl.textContent = `${num} meters = ${metersToFeet.toFixed(
    3
  )} feet | ${num} feet = ${feetToMeters.toFixed(3)} meters`;
  volumeEl.textContent = `${num} liters = ${litersToGallons.toFixed(
    3
  )} gallons | ${num} gallons = ${gallonsToLiters.toFixed(3)} liters`;
  massEl.textContent = `${num} kilos = ${kilogramsToPounds.toFixed(
    3
  )} pounds | ${num} pounds = ${poundsToKilograms.toFixed(3)} kilos`;
}

convertBtnEl.addEventListener("click", function () {
  convert(convertInEl.value);
});
