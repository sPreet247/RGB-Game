var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var pickedColor = colors[3];

colorDisplay.textContent = pickedColor.toUpperCase();
// Assign colors to squares
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
