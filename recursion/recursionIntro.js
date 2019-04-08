// 1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
var countDown = function(n) {
	while (n>=0) {
		console.log(n);
		n--;
	}
}
// Time complexity: O(n)

// 2. Next, try looping just like above except using recursion
var countDownRec = function(n) {
	if (n<0) {
		return 'finished';
	} else {
		console.log(n);
		return countDownRec(n-1);
	}
}
// Time complexity: O(n)

// 3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
var exponent = function(base, expo) {
	var result = 1;
	var n = 1;

	while (n <= expo) {
		result = result*base;
		n++;
	}

	console.log(base + '^' + expo + '=' + result);
}
// Time complexity: O(n)

// 4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
var RecursiveExponent = function(base,expo) {
	if (expo === 1) {
		return base;
	} else {
		return base*RecursiveExponent(base,expo-1);
	}
}
// Time complexity: O(n)

// 5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
var recursiveMultiplier = function(arr,num)  {
	if (arr.length === 1) {
		return [arr[0]*num];
	} else {
		console.log(arr.slice(1));
		return [arr[0]*num].concat(recursiveMultiplier(arr.slice(1),num));
	}
}
// Time complexity: O(n)

// 6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
var recursiveReverse = function(arr) {
	if (arr.length === 1) {
		return arr; // O(1)
	} else if (arr.length === 2) {
		return [arr[arr.length-1],arr[0]]; // O(1)
	} else {
		// return last + reverse(middle) + first
		return [arr[arr.length-1],...recursiveReverse(arr.slice(1,arr.length-1)),arr[0]]; 
	}
}
// Time complexity: O(n/2)

// countDown(10);
// countDownRec(10);
// exponent(2,3);
// console.log(RecursiveExponent (3,3));
// console.log(recursiveMultiplier([1,2,3,4,5],2));
console.log(recursiveReverse([1,2,3,4,5]));