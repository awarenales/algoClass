/*
Version 1:
Given the size of a grid (X rows and Y columns), write a function that returns the number of possible paths one can take starting at the top left of the grid and ending at the bottom right, assuming you can only move to the right and down.

Version 2:
Now, imagine that the you can move up, down, left, or right but cannot visit a spot that has already been visited. How many unique paths can the you take?
Hint: it may be useful to create a grid class and use it to keep track of the state as the you traverses the grid. What useful methods can you put on your grid class? Can you write an implementation that only uses a single grid?
*/

// Verson 1
// Time Complexity: O()
var pathCount = function(x,y) {
	var count = 0;
	var history = [];

	var traverse = function(x,y) { // arrow function?
		history.push("(" + x + ", " + y + ")");

		// if outside board
		if ((x < 0) || (y < 0)) {
			console.log(...history);
			console.log("ooops, fell out of the board!");
			return 0;
		}

		// if we reached end
		if ((x === 0) && (y === 0)) {
			console.log(...history);
			console.log("end reached :)");
			return count++;
		}
		
		// not end, not out of board = keep going!
		// 
		// check children:    currentSquare --- right
		//                          |
		//                       bottom
		else {
			return Math.max(traverse(x-1,y), traverse(x, y-1));
		}
	}

	// for a N x N board with (0,0) as ending point, the starting point is (N-1,N-1)
	return traverse(x-1,y-1);
}

/* CALL */
console.log("POSSIBLE PATHS: " + pathCount(3,3));