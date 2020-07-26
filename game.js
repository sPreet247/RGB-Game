var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
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
      h1.style.backgroundColor = clickedColor;
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

// Generating random colors function
function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    // get random color and push to arr
    arr.push(randomColors());
  }

  return arr;
}

// rgb random value from 0 - 255 colors
function randomColors() {
  // pick red value from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick green value from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick blue value from 0 - 255
  var b = Math.floor(Math.random() * 256);
  ('rgb(r, g, b)');
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
