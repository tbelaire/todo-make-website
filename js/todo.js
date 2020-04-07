let listEl = document.querySelector('#thelist');
let clearBtn = document.querySelector('.clear');
let saveBtn = document.querySelector('.save');
let loadBtn = document.querySelector('.load');
let postBtn = document.querySelector('#post');
let addItemEl = document.querySelector('#addItem');

clearBtn.addEventListener('click', function() {
    listEl.innerHTML = "";
});

saveBtn.addEventListener('click', function() {
    localStorage.setItem('todoList', listEl.innerHTML);
});

loadBtn.addEventListener('click', function() {
    listEl.innerHTML = localStorage.getItem('todoList');
});

postBtn.addEventListener('click', function() {
    post();
})

addItemEl.addEventListener('keypress', function(event)  {
    if(event.which === 13) { // Enter
        post();
    }
});

function post() {
    newEntry = todoEntry(addItemEl.value, "2020-04-30");
    addItemEl.value = "";
    listEl.append(newEntry);
}

function todoEntry(description, dueDate) {
    // <li class="todoEntry">
    // <div class="description">Profit</div>
    // <div class="dueDate">2020-04-09<div>
    // </li>
    let newEntry = document.createElement('li');
    newEntry.classList = "todoEntry";

    let descriptionEl = document.createElement('div');
    descriptionEl.classList = "description";
    descriptionEl.append(document.createTextNode(description));

    let dueDateEl = document.createElement('div');
    dueDateEl.classList = "dueDate";
    dueDateEl.append(document.createTextNode(dueDate))

    newEntry.append(descriptionEl, dueDateEl);
    return newEntry;
}
