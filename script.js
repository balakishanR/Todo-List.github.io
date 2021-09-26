function getandUpdate(){

    console.log("Updating...");
    tit = document.getElementById("title").value;
    if (localStorage.getItem("itemsJson") == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArraystr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArraystr);
      itemJsonArray.push([tit]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }

    update();
}

function update(){

    if (localStorage.getItem("itemsJson") == null) {
      itemJsonArray = [];
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArraystr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArraystr);
    }
  
    // populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `
      <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="Deleted(${index})">Delete</button></td>
      </tr>`;
    });
    tableBody.innerHTML = str; 
}

add = document.getElementById("add");
add.addEventListener("click", getandUpdate);
update()

function Deleted(itemIndex){
    console.log("deleting item...")
    itemJsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
    //delete method
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();

}

function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update();
    }
}
