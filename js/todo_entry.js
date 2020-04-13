export function todoEntry(data) {
    // <li class="todoEntry">
    //   <div class="description">Profit</div>
    //   <div class="dueDate">2020-04-09<div>
    // </li>


    let descriptionEl = document.createElement('div');
    descriptionEl.classList.add("description");
    descriptionEl.append(data.description);

    let dueDateEl = document.createElement('div');
    dueDateEl.classList.add("dueDate");
    dueDateEl.append(data.dueDate)

    let newEntry = document.createElement('li');
    newEntry.classList.add("todoEntry");
    newEntry.append(descriptionEl, dueDateEl);
    return newEntry;
}
