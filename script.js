
var addBox = function() {
  randomNumber(1, 7);
  randomColor(mathNumber);
  targetDiv = document.getElementById('divOne');
  divBox = document.createElement("DIV");
  button = document.createElement("BUTTON");
  X = document.createTextNode("X");
  button.id = 'buttonX';
  divBox.className = 'box';
  divBox.style.backgroundColor = color;
  divBox.addEventListener("click", function() {
    this.style.backgroundColor = 'black';
  }, false);
  button.addEventListener("click", function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }, false);
  button.appendChild(X);
  divBox.appendChild(button);
  targetDiv.appendChild(divBox);
  console.log('new box');
};

var mathNumber;

function randomNumber(min, max) {
  return mathNumber = Math.floor(Math.random() * (1 + max - min) + min);
}
//change color
var color = '';

function randomColor(number) {
  switch (number) {
    case 1:
      color = 'red';
      break;
    case 2:
      color = 'orange';
      break;
    case 3:
      color = 'yellow';
      break;
    case 4:
      color = 'green';
      break;
    case 5:
      color = 'blue';
      break;
    case 6:
      color = 'indigo';
      break;
    case 7:
      color = 'violet';
  }
}
//change font
var font = '';

function randomFont(number) {
  console.log('font change');
  switch (number) {
    case 1:
      font = 'Futura';
      break;
    case 2:
      font = 'Helvetica';
      break;
    case 3:
      font = 'Chalkboard';
      break;
    case 4:
      font = 'Courier';
      break;
    case 5:
      font = 'Monaco';
      break;
    case 6:
      font = 'fantasy';
      break;
    case 7:
      font = 'Georgia';
  }
  console.log(font);
}

function buttonOneClick() {
  addBox();
  randomFont(mathNumber);
  document.getElementById('fonty').style.fontFamily = font;
}
//add box
