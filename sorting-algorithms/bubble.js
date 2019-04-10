/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity
PS: Debug or insert console.logs to make sure logic is correct

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*** Pseudocode

bubblesort(array with size n) {
	do n-1 times {
		do n-1 times {
			check if arr[n-1] > arr[n] {
				if true, swap
			}
		}
	}
}
*/

var bubbleSort1 = function(arr) {
	let count = 0;
	for (let i = 1; i <= arr.length; i++) {
		for (let n = 0; n < arr.length; n++) {
			count++; // big-o helper; how many times it was executed?
			console.log("i = " + i + ", n = " + n);
			console.log("check: " + arr[n] + ">" + arr[n+1] + "?");
			if (arr[n] > arr[n+1]) { // doesn't swap if equal
				let temp = arr[n];
				arr[n] = arr[n+1];
				arr[n+1] = temp;
				console.log("after: " + arr + "\n");
			} else {
				console.log("no swap\n");
			}
		}
	}
	console.log("*****\nSORTED ARRAY: ");
	console.log(arr);
	console.log(count);
}
// Time complexity: O(n²)
// not adaptative: it will check the whole array at each iteraction, even if it was already checked and sorted - worst case

var bubbleSort2 = function(arr) {
	let unsorted = arr.length; // keep track of sorted itens
	let count = 0;
	for (let i = 1; i <= arr.length; i++) {
		for (let n = 0; n < unsorted-1; n++) {
			count++; // big-o helper; how many times it was executed?
			console.log("unsorted = " + unsorted);
			console.log("i = " + i + ", n = " + n);
			console.log("check: " + arr[n] + ">" + arr[n+1] + "?");			
			if (arr[n] > arr[n+1]) { // doesn't swap if equal
				console.log("SWAP!\nbefore: " + arr);
				let temp = arr[n];
				arr[n] = arr[n+1];
				arr[n+1] = temp;
				console.log("after: " + arr + "\n");
			} else {
				console.log("no swap\n");
			}
		}
		unsorted--;
	}
	console.log("*****\nSORTED ARRAY: ");
	console.log(arr);
	console.log(count);
}
// Time complexity: O(n²/2)

var bubbleSort = function(arr) {
	let unsorted = arr.length; // keep track of sorted itens
	let count = 0;
	for (let i = 1; i <= arr.length; i++) {
		for (let n = 0; n < unsorted-1; n++) {
			count++; // big-o helper; how many times it was executed?
			console.log("unsorted = " + unsorted);
			console.log("i = " + i + ", n = " + n);
			console.log("check: " + arr[n] + ">" + arr[n+1] + "?");			
			if (arr[n] > arr[n+1]) { // doesn't swap if equal
				console.log("SWAP!\nbefore: " + arr);
				let temp = arr[n];
				arr[n] = arr[n+1];
				arr[n+1] = temp;
				console.log("after: " + arr + "\n");
			} else {
				console.log("no swap\n");
			}
		}
		unsorted--;
	}
	console.log("*****\nSORTED ARRAY: ");
	console.log(arr);
	console.log(count);
}
// Time complexity: O(n²/2)

// RUN
bubbleSort1([5,3,67,3,1,7]);