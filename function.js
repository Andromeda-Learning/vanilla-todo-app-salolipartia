loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);

}
// subit data function
function submit(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value == '') {
        alert('Enter something!')
    } else {
        addTask(input.value)
    }
}

// add tasks
function addTask(task) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(myInput.value))
    ul.appendChild(li);
}