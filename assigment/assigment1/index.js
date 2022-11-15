var subject = [];
var marks = [];
var index = [];
var c = [];
var country = [];
var fullMarks = [];
var c = 0

function addToTable() {
  document.getElementById("no-data").style.display = "none";
  var sub = document.getElementById("first").value;
  var num = document.getElementById("last").value;
  var fullnum = document.getElementById("city").value;
  var coun = document.getElementById("countries").value;

  c++;
  if (sub.length != 0  && num.length != 0  && fullnum.length != 0 && coun.length != 0 ) {
    
    country = [...country, coun];
    subject = [...subject, sub];
    marks = [...marks, num];
    fullMarks = [...fullMarks, fullnum];
    index = [...index, c];

    displayTable();
  }
  else{
    alert("Enter the Values")
  }
  sub.value= "";
}

function displayTable() {
  const length = subject.length;
  console.log(length);
  document.getElementsByTagName("tbody").innerHTML = "";

  var tr = document.createElement("tr");

  for (var i = 0; i < length; i++) {
    tr.innerHTML = "";
    var td1 = document.createElement("td");
    td1.innerHTML = index[i];
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = subject[i];
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = marks[i];
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    td4.innerHTML = fullMarks[i];
    tr.appendChild(td4);

    var td5 = document.createElement("td");
    td5.innerHTML = country[i];
    tr.appendChild(td5);

    document.getElementsByTagName("tbody")[0].appendChild(tr);
  }
 
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("full-marks").value = "";

}

function getResult() {}

index_value = 0
function myFunction() {  
 var table = document.getElementById("myTable");

 var first_value = document.getElementById("first").value;
 var second_value = document.getElementById("last").value;
 var city_value = document.getElementById("city").value;
 var countries_value = document.getElementById("countries").value;

 const length = subject.length;
 var row = table.insertRow(1);

 if (first_value.length != 0  && second_value.length != 0  && city_value.length != 0 && countries_value.length != 0 ) {
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   index = [...index, c];
   country = [...country, countries_value];
   subject = [...subject, second_value];
   marks = [...marks, city_value];
   fullMarks = [...fullMarks, first_value];
   index = [...index, c];

  cell2.innerHTML = first_value;
  cell3.innerHTML = second_value;
  cell4.innerHTML = city_value;
  cell5.innerHTML = countries_value;
  const length = subject.length;
  display_serialnumber();
  c++
}
}

function display_serialnumber(){
  console.log("Hii")
  var table = document.getElementById("myTable");
  var totalRecord = table.rows.length;
  var ind = 0;
  for(var i=1; i<totalRecord;i++){
    table.rows[i].cells[0].innerHTML = ind;
    ind++;
  }
}
document.getElementById("m-tottalmarks").addEventListener("click", function(){
  console.log("Hii")
  var table = document.getElementById("myTable");
  var totalRecord = table.rows.length;
  var ind = 0;
  for(var i=1; i<totalRecord;i++){
    table.rows[i].cells[0].innerHTML = ind;
    ind++;
  }
  c++
  index = [...index, c];

});




