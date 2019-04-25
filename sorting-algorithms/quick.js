/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

var quickSort = function (array) {
    var pivot = { //last element on the unsorted array
        index: array.length - 1,
        value: array[array.length - 1],
    };
    
    // loop from start of array to pivot location
    for (let i = 0; i < pivot.index; i++) {
        if (array[i] > array[pivot]) {
            swap(array[i],array[pivot]);
            swap(array[pivot],array[pivot-1]);
        }
        else {
            // do nothing, check next i
        }
    }

// why a partitioning step?

    // return sorted left part + sorted right part
    quickSort(array.slice(0,pivot));
    quickSort(array.slice(pivot-array.length)]);
}

var swap = function (a,b) {
    let temp = a;
    a = b;
    b = temp;
}