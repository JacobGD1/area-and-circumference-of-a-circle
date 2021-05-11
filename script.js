document.getElementById('area').addEventListener('click', areaButton)
document.getElementById('circumference').addEventListener('click', circumferenceButton)
// Connects buttons to area and circumference

let radius = 0
let area = 0
let circumference = 0
let pinumber = Math.PI
// Sets Variables/Let statements

function areaButton () {
  radius = document.getElementById('number').value
  radius = parseFloat(radius)
  pinumber = parseFloat(pinumber)

  area = pinumber * (radius / 2) ** 2
  document.getElementById('area-answer').innerHTML = area
}
// Function of Area Button

function circumferenceButton () {
  radius = document.getElementById('number').value
  radius = parseFloat(radius)
  pinumber = parseFloat(pinumber)

  circumference = pinumber * radius
  document.getElementById('circumference-answer').innerHTML = circumference
}
// Function of Circumference Button
