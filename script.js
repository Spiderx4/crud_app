let data = [
    {id: 1, name: "Sahil", email: "Sahil@gmail.com"},
];

//form fix
let formfix = document.querySelector("form");

formfix.addEventListener("submit", function(event){
    event.preventDefault();
});

function readAll(){
    const tableData = document.querySelector(".table_data");
    let elements = "";

    data.map(obj =>(
        elements += `<tr>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>
          <button onclick={edit(${obj.id})}>Edit</button>
          <button onclick={deleted(${obj.id})}>Delete</button>
        </td>
        </tr>`
    ));

    tableData.innerHTML = elements;
}

let id = 1;

//create
function post(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    id++;

    var obj = {id: id,name: name,email: email};
    data.push(obj);

    document.querySelector(".id").value = obj.id;

    readAll();
}

function updatebtn(){
    let idvalue = parseInt(document.querySelector(".id").value);

    document.querySelector('.create_form').style.display = "none";
    document.querySelector('.update_form').style.display = "block";

    // it returns the object based on id
    var object = data.find(obj => obj.id === idvalue);

    //it display that object values for rename
    document.querySelector(".uname").value = object.name;
    document.querySelector(".uemail").value = object.email;
    document.querySelector(".id").value = object.id;
    
}

//edit
function edit(id){
    document.querySelector('.create_form').style.display = "none";
    document.querySelector('.update_form').style.display = "block";

    // it returns the object based on id
    var object = data.find(obj => obj.id === id);

    //it display that object values for rename
    document.querySelector(".uname").value = object.name;
    document.querySelector(".uemail").value = object.email;
    document.querySelector(".id").value = object.id;
}


//update
function update(){
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var id = parseInt(document.querySelector(".id").value);

    let index = data.findIndex(d => d.id === id);

    //eg data[3] = object4 {fill those values}
    data[index] = {id,name,email};

    document.querySelector('.create_form').style.display = "block";
    document.querySelector('.update_form').style.display = "none";

    readAll();

}

//delete 
function deleted(id){
    data = data.filter(d => d.id !== id);

    readAll();
}

//delete button
function deletebtn(){
    let idvalue = parseInt(document.querySelector(".id").value);

    data = data.filter(d => d.id !== idvalue);

    readAll();
}


