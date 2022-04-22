// question-----------------------------------------------
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
// test case1:bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// test case1:bouncer([false, null, 0, NaN, undefined, ""]) should return [].

// ----------------------------------------------------------------------------

function bouncer(arr) {
  let filteredArray = arr.filter(item => {
    if (item) return item;
  });
  return filteredArray;
}

let result = bouncer([7, "ate", "", false, 9]);
console.log(result);
