// method 1
function sumOfTwo(a, b, v) {
  const possiableNumInb = new Set(a.map(num => v - num));
  return b.some(num => possiableNumInb.has(num));
}

//method 2
function sumOfTwo(a, b, v) {
    for(i in a){
        if(b.indexOf(v-a[i]) !== -1) return true
    }
    return false
}
