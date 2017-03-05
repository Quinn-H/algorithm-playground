/*Double for loop!! this is not good,
I will come up with better one later
*/

var sum_pairs=function(ints, s){
    //your code here
    for (var i = 0; i < ints.length; i++) {
      for (var j = i+1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s)
      return [ints[i], ints[j]]
      }
      }
}
