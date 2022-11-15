
function addToTable() {
  var sub = document.getElementById("first").value;
  var pattern = document.getElementById("patt").value;
  var result;
  var flag =false
  console.log(sub)
  for(var i=0; i<=sub.length; i++){
    console.log(sub[i])
    if(sub[i] == pattern){
        flag= true;
        i = i+1
        output(i, sub);
        break;
    }  
  }
  if (flag==true){
    alert("Found")
  }
  else{
    alert("No Match Found")
  }
}

function output(n, sub){
    var result = ''
    console.log(n, sub)
    for(i=n;i<sub.length;i++)
     result = result + sub[i]

 console.log(result)
 document.getElementById("Result").innerHTML = result
}