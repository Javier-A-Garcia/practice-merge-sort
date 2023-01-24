// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1){
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let halfwayPoint = Math.floor(arr.length/2);
  let left = arr.slice(0, halfwayPoint);
  let right = arr.slice(halfwayPoint);

  // Recursively sort the left half
  left  = mergeSort(left);
  // Recursively sort the right half
  right = mergeSort(right); 
  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let aPointer = 0;
  let bPointer = 0;

  // While there are still values in each array...
  while (aPointer < arrA.length && bPointer < arrB.length) {
    
    // Compare the first values of each array
    if (arrA[aPointer] < arrB[bPointer]) {
      // Add the smaller value to the return array
      merged.push(arrA[aPointer]);
      // Move the pointer to the next value in that array
      aPointer++;
    } else{
      // Add the smaller value to the return array
      merged.push(arrB[bPointer]);
      // Move the pointer to the next value in that array
      bPointer++;
    }
  }

  // Accounts for cases where only 1 array has values left
  while (aPointer < arrA.length) {
    merged.push(arrA[aPointer]);
    aPointer++;
  }
  while (bPointer < arrB.length) {
    merged.push(arrB[bPointer]);
    bPointer++;
  }
  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
