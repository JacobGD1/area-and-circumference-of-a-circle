document.getElementById('area').addEventListener('click', areaButton)
document.getElementById('circumference').addEventListener('click', circumferenceButton)
//Connects buttons to area and circumference

let diameter = 0
let area = 0
let circumference = 0
let pinumber = Math.PI
//Sets Variables/Let statements

function areaButton () {
  diameter = document.getElementById('number').value
  diameter = parseFloat(diameter)
  pinumber = parseFloat(pinumber)

  area = pinumber * (diameter / 2) ** 2
  document.getElementById('Area-Answer').innerHTML = area
} 
// Function of Area Button

function circumferenceButton () {
  diameter = document.getElementById('number').value
  diameter = parseFloat(diameter)
  pinumber = parseFloat(pinumber)

  circumference = pinumber * diameter
  document.getElementById('Circumference-Answer').innerHTML = circumference
}
// Function of Circumference Button
