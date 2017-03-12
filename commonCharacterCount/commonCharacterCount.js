// this method didn't pass hidden test
function commonCharacterCount(s1, s2) {
    var count = 0
    var s1arr = s1.split('')
    var s2arr = s2.split('')
    for (var i = 0; i<s1arr.length; i++) {
        if (s2arr.includes(s1arr[i]))
            count++
            s2arr.splice((s2arr.indexOf(s1arr[i])),1)
    }
    return count
}

// other methods


function commonCharacterCount(s1, s2) {
    var string1=s1.split('');
    var string2=s2.split('');
    var common=0;

    for(var i=0;i<string1.length;i++){
        if(string2.indexOf(string1[i])>=0){
            common++;
            string2.splice(string2.indexOf(string1[i]),1);
        }
    }
    return common;
}


function commonCharacterCount(s1, s2) {
  var a=s1.split(""),r=0
  while (a.length){
    var t=a.pop()
    if(s2.includes(t)){
      r++
      s2=s2.replace(t,"")
    }
  }
  return r
}
