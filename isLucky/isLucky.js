// my method
function isLucky(n) {
    var numArr = n.toString().split('').map(Number),
        halfArrIndex = numArr.length/2,
        i = 0,
        first = 0,
        second = 0
    while (i<halfArrIndex) {
        first += numArr[i]
        i++
    }
    while (halfArrIndex<numArr.length) {
        second += numArr[halfArrIndex]
        halfArrIndex++
    }
    return first === second
}

// other methods

function isLucky(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}
