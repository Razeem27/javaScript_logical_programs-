// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// test Case:
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

// destroyer([2, 3, 2, 3], 2, 3) should return [].

// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
//-----------------------------------------------------------------------------------------
function destroyer(arr, ...arr2) {
    let filteredArray=arr.filter((value)=> !arr2.includes(value))
  return filteredArray;
}

let result = destroyer(["tree", "hamburger", 53], "tree", 53);
console.log(result);