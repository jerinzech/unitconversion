let lenFeetEl = document.getElementById("length-feet");
let lenMetersEl = document.getElementById("length-meters");

let volGallonsEl = document.getElementById("volume-gallons");
let volLitresEl = document.getElementById("volume-litres");

let massPoundsEl = document.getElementById("mass-pounds");
let massKiloEl = document.getElementById("mass-kilos");

let feetNum = 0;
let metersNum = 0;
let gallonsNum = 0;
let litresNum = 0;
let poundsNum = 0;
let kilosNum = 0;

function calc() {
  let inputNum = document.getElementById("user-input").value; // input from the user

  //calculations

  /*  
1 foot = 0.3048 meters
1 meter = 3.28084 feet

1 litre = 0.2641729 gallon (US)
1 gallon (US) = 3.7854 litres

1 kilo = 2.204623 pounds
1 pound = 0.4535924 kilos

*/

  feetNum = inputNum * 3.28084;
  metersNum = inputNum * 0.3048;
  gallonsNum = inputNum * 0.2641729;
  litresNum = inputNum * 3.7854;
  poundsNum = inputNum * 2.204623;
  kilosNum = inputNum * 0.4535924;

  //outputs
  lenFeetEl.innerText =
    inputNum + " " + "meters" + " = " + feetNum.toFixed(3) + " " + "feet";
  lenMetersEl.innerText =
    inputNum + " " + "feet" + " = " + metersNum.toFixed(3) + " " + "meters";

  volGallonsEl.innerText =
    inputNum + " " + "litres" + " = " + gallonsNum.toFixed(3) + " " + "gallons";
  volLitresEl.innerText =
    inputNum + " " + "gallons" + " = " + litresNum.toFixed(3) + " " + "litres";

  massPoundsEl.innerText =
    inputNum + " " + "kilos" + " = " + poundsNum.toFixed(3) + " " + "pounds";
  massKiloEl.innerText =
    inputNum + " " + "pounds" + " = " + kilosNum.toFixed(3) + " " + "kilos";
}

function reset() {
  //reset output
  lenFeetEl.innerText = "0 meters = 0.000 feet";
  lenMetersEl.innerText = "0 feet = 0.000 meters";

  volGallonsEl.innerText = "0 litres = 0.000 gallons";
  volLitresEl.innerText = "0 gallons = 0.000 litres";

  massPoundsEl.innerText = "0 kilos = 0.000 pounds";
  massKiloEl.innerText = "0 pounds = 0.000 kilos";
}
