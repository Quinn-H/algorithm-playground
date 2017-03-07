// Method 1
function adjacentElementsProduct(inputArray) {
   var maxN = inputArray[0] * inputArray[1]
   for (var i = 1; i < inputArray.length-1; i++) {
      maxN = Math.max(inputArray[i] * inputArray[i+1], maxN)
   }
      return maxN
}

// Method 2
function adjacentElementsProduct(inputArray) {
   var max = -100000
   for (var i=0; i < inputArray.length-1; i++){
      if (inputArray[i] * inputArray[i+1] > max)
         max = inputArray[i] * inputArray[i+1]

   }
      return max
}
