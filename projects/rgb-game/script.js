// ======================================== //
//                  VARIABLES               //
// ======================================== //
var numSquares = 6; // Lets game know if its easy/hard mode. (Easy = 3, Hard = 6)
var colors = []; // Array which will hold all the RGB values (3 or 6 values)
var pickedColor; // Winning color

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay"); // This displays RGB value on the top of the page


var resetButton = document.querySelector("#reset"); // This will reset EVERYTHING
var modeButtons = document.querySelectorAll(".mode"); // Easy or Hard?
var messageDisplay = document.querySelector("#message"); // Try again or Correct! message display

init(); // Automatically initalize all this stuff

// ======================================== //
//                   LOGIC                  //
// ======================================== //

function init() { // THE FIRST THING THAT IS RAN

	// This FOR loop determines if this game is on EASY or HARD mode, reset the game when pressed
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}

	// For each Square in the HTML, allow it to have a CLICK function
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function() { // add click listeners to squares
			var clickedColor = this.style.backgroundColor; 	// grab color of square

			// compare to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "correct!"; // If you win, it'll change the reset button, message displayed, and colors of all the squares
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor ="#232323"; // If you get the answer wrong the squares change to the background's color, and try again message displays
				messageDisplay.textContent = "try again!";
			}
		});
	}
	reset();
}

function reset() { // RESETS EVERYTHING

	colors = generateRandomColors(numSquares); // Generate all new colors (numSquares is 3 or 6 | easy or hard)
	pickedColor = pickColor(); // Pick a new random color from array
	colorDisplay.textContent = pickedColor; // Change color display to match picked Color
	messageDisplay.textContent = ""; // Erase any ,essages left on messageDisplay
	resetButton.textContent = "New Colors"; // Reset the reset button's message

	// This determines whether or not the blocks should display (If game is on Easy or Hard mode)
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function(){ // Add event listener for the Reset Button, if clicked, RUN reset function
	reset();
});

function changeColors(color){ // Changes the color of all the other squares to be the same color as winning color
	for(var i = 0; i < squares.length; i++){ // loop through all squares and change each color to match given color
		squares[i].style.backgroundColor = color; // change each color to match given color
	}
}

function pickColor() { // This FUNCTION picks a random winning color based on what is in the colors ARRAY
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) { // Generates random colors based on how many squares (the input)
	var arr = []; // make an array
	for(var i = 0; i < num; i++) { // repeat num times
		arr[i] = randomColor();
	}
	return arr; // return that array
}

// NOTE - THIS FUNCTION ABOVE ^^^^^ IS RELIANT ON THIS FUNCTION BELOW vvvvvv TO PRODUCE RANDOM COLORS
function randomColor() { // Rgb color producer out put is random ex: rgb(x,y,z), where xyz are random nums from 0 - 255
	var r = Math.floor(Math.random() * 256); // pick a "red" from 0 - 255
	var g = Math.floor(Math.random() * 256); // pick a "green" from 0 - 255
	var b = Math.floor(Math.random() * 256); // pick a "blue" from 0 - 255
	return "rgb(" + r + ", " + g + ", " + b + ")"; // return RGB generated number
}