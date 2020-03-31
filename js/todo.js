let listEl = document.querySelector('#thelist');
let clearBtn = document.querySelector('.clear');
let saveBtn = document.querySelector('.save');
let loadBtn = document.querySelector('.load');
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

addItemEl.addEventListener('keypress', function(event)  {
    if(event.which === 13) { // Enter
        let newEntry = document.createElement('li');
        let text = document.createTextNode(this.value);
        newEntry.append(text);
        listEl.append(newEntry);

        this.value = " ";
    }
});
