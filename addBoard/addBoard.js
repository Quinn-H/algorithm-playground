// my way
function addBorder(picture) {
    var side = '',
        i = 0,
        j = 0
    for (i; i<picture.length; i++) {
        picture[i] = '*' + picture[i] + '*'
    }
    while (j<picture[0].length) {
        if (side.length !== picture[0].length) {
            side += '*'
            j++
        }
    }
    picture.push(side)
    picture.unshift(side)
    return picture

}

// other wauy
function addBorder(p) {
  return ["*".repeat(p[0].length+2),...p.map(x=>"*"+x+"*"),"*".repeat(p[0].length+2)]
}
