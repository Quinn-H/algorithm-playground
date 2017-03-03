function isIsogram(str){
  var lowerStrIntoArr = str.toLowerCase().split('')
for (var i = 0; i < str.length; i++) {
   if (lowerStrIntoArr.includes(lowerStrIntoArr[i], i+1) === true)
     return false
  }
    if (str === "") {
    return true
    }
    else {
    return true
    }
}
