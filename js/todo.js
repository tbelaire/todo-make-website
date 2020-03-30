let listEl = document.querySelector('#thelist');
let clearBtn = document.querySelector('.clear');
let saveBtn = document.querySelector('.save');


clearBtn.addEventListener('click', (event) => {
    listEl.innerHTML = "";
});

saveBtn.addEventListener('click', () => {
    alert("Can't save yet, sorry");
});
