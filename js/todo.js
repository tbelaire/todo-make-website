import {todoEntry} from './todo_entry.js'


let listEl = document.querySelector('#thelist');
let clearBtn = document.querySelector('.clear');
let saveBtn = document.querySelector('.save');
let loadBtn = document.querySelector('.load');
let postBtn = document.querySelector('#post');
let addItemEl = document.querySelector('#addItem');
let addDateEl = document.querySelector('#addDate')

const initialData = [
    {"description": "Make a website", "dueDate": "2020-04-04"},
    {"description": "Add Javascript", "dueDate": "2020-04-07"},
    {"description": "???", "dueDate": "2020-04-08"},
    {"description": "Profit", "dueDate": "2020-04-09"}
];

for (let row of initialData) {
    listEl.append(todoEntry(row));
}


function post() {
    let dateValid = !!addDateEl.value;
    let errorText = document.querySelector('#dateError');
    errorText.classList.toggle('hidden', dateValid);
    

    if (!dateValid) {
        return;
    }         
    
    newEntry = todoEntry({description: addItemEl.value, dueDate: addDateEl.value});
    addItemEl.value = "";
    listEl.append(newEntry);
}


clearBtn.addEventListener('click', function() {
    listEl.innerHTML = "";
});

saveBtn.addEventListener('click', function() {
    console.log("Starting walk");
    let todoItems = [];
    for (child of listEl.children) {
        let description = child.getElementsByClassName("description")[0];
        let dueDate = child.getElementsByClassName("dueDate")[0];
        //debugger;
        console.log(description.textContent);
        console.log(dueDate.textContent)
        todoItems.push({description: description.textContent, dueDate:dueDate.textContent});
    }
    console.log(JSON.stringify(todoItems));
    localStorage.setItem('todoList', JSON.stringify(todoItems));

});

loadBtn.addEventListener('click', function() {
    listEl.innerHTML = '';
    let savedJson = localStorage.getItem('todoList');
    let savedEntries = JSON.parse(savedJson);
    if (savedEntries.length === 0) {
        for (row of initialData) {
            listEl.append(todoEntry(row));
        } 
    } else {
        for (row of savedEntries) {
            listEl.append(todoEntry(row));
        }
    }
});

postBtn.addEventListener('click', function() {
    post();
})

addItemEl.addEventListener('keypress', function(event)  {
    if(event.which === 13) { // Enter
        post();
    }
});



