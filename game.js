var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
var hardBtn = document.querySelector('#hardBtn');
var easyBtn = document.querySelector('#easyBtn');
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor.toUpperCase();

// easy button event listener
easyBtn.addEventListener('click', function () {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  // pick random color
  pickedColor = pickColor();
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

// Hard button event listener
hardBtn.addEventListener('click', function () {
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  // pick random color
  pickedColor = pickColor();
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].style.display = 'block';
  }
});

// click listener to reset button
resetButton.addEventListener('click', function () {
  // generate random colors
  colors = generateRandomColors(numSquares);
  // pick random color
  pickedColor = pickColor();
  // change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  // Assign new colors to squares
  messageDisplay.textContent = '';
  this.textContent = 'New colors';
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  // Reset the h1
  h1.style.backgroundColor = 'steelBlue';
});

// Assign colors to squares
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners to all squares
  squares[i].addEventListener('click', function () {
    var clickedColor = this.style.backgroundColor;

    // compare the clicked color to the picked colors
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = 'Correct';
      resetButton.textContent = 'Play Again?';
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

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
