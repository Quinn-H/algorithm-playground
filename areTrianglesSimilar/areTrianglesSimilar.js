// my way
function areTrianglesSimilar(coordinates) {
    var a1b1 = Math.sqrt(
            Math.pow(coordinates[0]-coordinates[2], 2)+ Math.pow(coordinates[1]-coordinates[3], 2)
        ),
        a1c1 = Math.sqrt(
            Math.pow(coordinates[0]-coordinates[4], 2)+ Math.pow(coordinates[1]-coordinates[5], 2)
        ),
        b1c1 = Math.sqrt(
            Math.pow(coordinates[2]-coordinates[4], 2)+ Math.pow(coordinates[3]-coordinates[5], 2)
        ),
        a2b2 = Math.sqrt(
            Math.pow(coordinates[6]-coordinates[8], 2)+ Math.pow(coordinates[7]-coordinates[9], 2)
        ),
        a2c2 = Math.sqrt(
            Math.pow(coordinates[6]-coordinates[10], 2)+ Math.pow(coordinates[7]-coordinates[11], 2)
        ),
        b2c2 = Math.sqrt(
            Math.pow(coordinates[8]-coordinates[10], 2)+ Math.pow(coordinates[9]-coordinates[11], 2)
        )
    if (Math.atan(a1b1/a1c1) == Math.atan(a2b2/a2c2) && Math.atan(a1c1/a1b1) == Math.atan(a2c2/a2b2) && Math.asin(a1c1/b1c1).toFixed(5) == Math.asin(a2c2/b2c2).toFixed(5)){
        return true
    } else {
        return false
    }
}
