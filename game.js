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
var messageDisplay = document.querySelector('#message');
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor.toUpperCase();
// Assign colors to squares
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners to all squares
  squares[i].addEventListener('click', function () {
    var clickedColor = this.style.backgroundColor;

    // compare the clicked color to the picked colors
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = 'Correct';
      changeColor(pickedColor);
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function changeColor(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match pickedColor
    squares[i].style.backgroundColor = color;
  }
}

// Random colors function
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
