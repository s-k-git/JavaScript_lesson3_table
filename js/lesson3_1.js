function addtable() {
  const comment = document.getElementById("comment").value;
  const statebtn = document.createElement("input");
  statebtn.type = "button";
  statebtn.value = "作業中";
  const deletebtn = document.createElement("input");
  deletebtn.type = "button";
  deletebtn.value = "削除";

  let table = document.getElementById("table-contents");
  let newRow = table.insertRow();

  let newCell = newRow.insertCell();
  let newText = document.createTextNode("");
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newText = document.createTextNode(comment);
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newCell.appendChild(statebtn);

  newCell = newRow.insertCell();
  newCell.appendChild(deletebtn);

  const commentvalue = document.getElementById("comment");
  commentvalue.value = "";
}