function allLongestStrings(inputArray) {
  var allLongest = []
  var firstLongest = inputArray.sort((a,b) => b.length - a.length)[0]
  console.log(firstLongest)
  for (var i=0; i<inputArray.length; i++) {
    if(inputArray[i].length === firstLongest.length)
      allLongest.push(inputArray[i])
  }
  return allLongest
}


// other methods

function allLongestStrings(inputArray) {
    var lengths = inputArray.map(e => e.length);
    var max = Math.max(...lengths);
    return inputArray.filter(e => e.length === max)

}
