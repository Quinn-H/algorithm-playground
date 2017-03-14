function sortByHeight(a) {
        var arrNoTreesInOrder = a.filter( num => num !== -1).sort((a,b) => a-b),
            treeIndex = [],
            i = 0
        while (i<a.length) {
            if(a[i] === -1) {
                treeIndex.push(a.indexOf(a[i]))
                a[i] = 1

            }
            i++
        }
        for (var j = 0; j<treeIndex.length; j++){
            arrNoTreesInOrder.splice(treeIndex[j], 0, -1)
        }
        return arrNoTreesInOrder
}
