// question
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// test cases
// spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

// spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.-


// -------------------------------------------------------------------------------------------

function spinalCase(str) {
    let reg=/[_]|\s/g
    str = str.replace(/([a-z])([A-Z])/g,"$1 $2");
    
     return str.replace(reg, "-").toLowerCase();
}

let result = spinalCase('thisIsSpinalTap');
console.log(result);