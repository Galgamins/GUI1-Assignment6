//Main function to generate table. Everything goes through this function.
function generateTable(multplierMin, multplierMax, multiplicandMin, multiplicandMax) {
  var multiplier1 = Number(multplierMin.value);
  var multiplier2 = Number(multplierMax.value);
  var multiplicand1 = Number(multiplicandMin.value);
  var multiplicand2 = Number(multiplicandMax.value);

  validateInput(multiplier1, multiplier2, multiplicand1, multiplicand2);

  var table = document.getElementById("resultTable");
  table.innerHTML = ""; //Clears table contents in case there was previously cells in there

  var rowHead = table.insertRow(0);
  var cell = rowHead.insertCell(-1);
  cell.innerHTML = ''; //Fills in blank cell that is at the crossing point of the two headers

  //Fills in horizontal header
  for (i = multiplier1; i <= multiplier2; i++) {
    var cell = rowHead.insertCell(-1);
    cell.innerHTML = i;
  }

  //Fills in cells
  for (i = multiplicand1; i <= multiplicand2; i++) {
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = i; //Fills in vertical header
    for (j = multiplier1; j <= multiplier2; j++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = i * j;
    }
  }
}

//Validates input to generateTable function
function validateInput(multiplier1, multiplier2, multiplicand1, multiplicand2) {
  if (multiplier1 == "" || multiplier2 == "" || multiplicand1 == "" || multiplicand2 == "") {
    alert("You must enter a number in all of the boxes!");
    exit();
  }

  if (multiplier1 > multiplier2) {
    alert("The first multiplier must be less than or equal to the second multiplier!");
    exit();
  }
  if (multiplicand1 > multiplicand2) {
    alert("The first multiplicand must be less than or equal to the second multiplicand!");
    exit();
  }
}
