function likes(names) {
  // TODO
  var output = ''

  if ( !names.length ){
     output += 'no one likes this'
  }
  if (names.length === 1) {
    output += names[0] + ' likes this'
  }
  if (names.length === 2) {
    output += names[0] + ' and ' + names[1] + ' like this'
  }
  if (names.length === 3) {
    output += names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }
  if (names.length > 3) {
    var others = names.length - 2
    output += output += names[0] + ', ' + names[1] + ' and ' + others + ' others like this'
  }
  return output
}
