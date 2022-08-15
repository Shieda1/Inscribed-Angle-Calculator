// https://calculator.swiftutors.com/inscribed-angle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inscribedAngleRadio = document.getElementById('inscribedAngleRadio');
const lengthofMinorArcRadio = document.getElementById('lengthofMinorArcRadio');
const radiusoftheCircleRadio = document.getElementById('radiusoftheCircleRadio');

let inscribedAngle;
const NINTY = 90;
const PI = Math.PI;
let lengthofMinorArc = v1;
let radiusoftheCircle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

inscribedAngleRadio.addEventListener('click', function() {
  variable1.textContent = '(L) Length of Minor Arc';
  variable2.textContent = '(R) Radius of the Circle';
  lengthofMinorArc = v1;
  radiusoftheCircle = v2;
  result.textContent = '';
});

lengthofMinorArcRadio.addEventListener('click', function() {
  variable1.textContent = 'Inscribed Angle (Degrees)';
  variable2.textContent = '(R) Radius of the Circle';
  inscribedAngle = v1;
  radiusoftheCircle = v2;
  result.textContent = '';
});

radiusoftheCircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Inscribed Angle (Degrees)';
  variable2.textContent = '(L) Length of Minor Arc';
  inscribedAngle = v1;
  lengthofMinorArc = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inscribedAngleRadio.checked)
    result.textContent = `Inscribed Angle = ${computeInscribedAngle().toFixed(2)} Degrees`;

  else if(lengthofMinorArcRadio.checked)
    result.textContent = `Length of Minor Arc = ${computeLengthofMinorArc().toFixed(2)}`;

  else if(radiusoftheCircleRadio.checked)
    result.textContent = `Radius of the Circle = ${computeRadiusoftheCircle().toFixed(2)}`;
})

// calculation

function computeInscribedAngle() {
  return (NINTY * Number(lengthofMinorArc.value)) / (PI * Number(radiusoftheCircle.value));
}

function computeLengthofMinorArc() {
  return (Number(inscribedAngle.value) * PI * Number(radiusoftheCircle.value)) / NINTY;
}

function computeRadiusoftheCircle() {
  return (NINTY * Number(lengthofMinorArc.value)) / (PI * Number(inscribedAngle.value));
}