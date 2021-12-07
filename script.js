function add() {
  let table = document.getElementById("myTable");
  row = table.insertRow(-1);

  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);
  let cell6 = row.insertCell(6);
  let cell7 = row.insertCell(7);

  cell0.innerHTML = document.querySelector(".Fname").value;
  cell1.innerHTML = document.querySelector(".Lname").value;
  cell2.innerHTML = document.querySelector(".Address").value;
  cell3.innerHTML = document.querySelector(".Pincode").value;
  cell5.innerHTML = checkBoxValue();
  cell4.innerHTML = document.querySelector(".Gender").value;
  cell6.innerHTML = document.querySelector(".State").value;
  cell7.innerHTML = document.querySelector(".country").value;

  reset();
}

function reset() {
  document.querySelector("#myForm").reset();
}

function checkBoxValue() {
  let l1 = document.getElementById("Vegetables");
  let l2 = document.getElementById("Fruits");
  let l3 = document.getElementById("Fish-seafood");
  let l4 = document.getElementById("Dairy-foods");
  let l5 = document.getElementById("Eggs");
  let arr = [l1, l2, l3, l4, l5];
  let check = arr
    .filter((s) => s.checked === true)
    .map((s) => s.name)
    .join(" ");
  return check;
}

function checkInput() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length < 2) {
    document.querySelector(".error").innerText =
      "Please select at least two options";
  } else {
    document.querySelector(".error").innerText = "";
    add();
  }
}
