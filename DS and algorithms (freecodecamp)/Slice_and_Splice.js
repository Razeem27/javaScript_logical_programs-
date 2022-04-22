// Question
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// example testCase: frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

function frankenSplice(arr1, arr2, n) {
  let newarr2 = arr2.slice(0, arr2.length);
  let slicedElements = arr2.slice(n, arr2.length);
  newarr2.splice(n, arr1.length, ...arr1, ...slicedElements);
  return newarr2;
}

let result = frankenSplice([1, 2], ["a", "b"], 1);
console.log(result);
