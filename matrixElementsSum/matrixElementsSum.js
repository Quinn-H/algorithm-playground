function matrixElementsSum(matrix) {
    var sum = 0;
    // Navigate each column of rooms
    // i = current column, j = current floor in column
    for (var i = 0; i < matrix[0].length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                // This room is haunted, so we don't care about the rooms below it.
                // Continue to the next column of rooms
                break;
            }
            sum += matrix[j][i];
        }

    }

    return sum;
}
