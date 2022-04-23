// ----------------------------------------------------------------------------------------
// questions
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// Test case 1:chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// Test case 2:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

// -----------------------------------------------------------------------------------------


function chunkArrayInGroups(arr, size) {
    let newArray = [];
    let start,end;
    for (let i = 0; i < arr.length / size; i++){
        start = (i * size)
        end=size+(i*size)
        let subArray = arr.slice(start, end);
        newArray.push(subArray)
    }
  return newArray;
}

let result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(result);