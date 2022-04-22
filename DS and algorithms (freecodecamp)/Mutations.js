// Question
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// test cases:
// mutation(["hello", "hey"]) should return false.

// mutation(["hello", "Hello"]) should return true.

// //////////////////////////////////////////////////////////////////////////////////////

function mutation(arr) {
  let flag = true;
  let arr1 = arr[0].toUpperCase().split("");
  let arr2 = arr[1].toUpperCase().split("");
  arr2.forEach(element => {
    if (arr1.indexOf(element) == -1) flag = false;
  });

  return flag;
}

let result = mutation(["hello", "Hello"]);

console.log(result);
