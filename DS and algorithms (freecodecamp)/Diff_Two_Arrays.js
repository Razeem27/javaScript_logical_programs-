// questions
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.


// test cases:
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

// -----------------------------------------------------------------------------------------


function diffArray(arr1, arr2) {
    let newArr = [];
    let newset = new Set([...arr1, ...arr2]);
    newset.forEach((i) => {
        if (!arr1.includes(i)) {
            newArr.push(i)
        }
        if (!arr2.includes(i)) {
            newArr.push(i);;

        }
    })
  return newArr;
}

let result = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
console.log(result);