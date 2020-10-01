const button = document.querySelector('.button');
const paragraph = document.querySelector('.paragraph');
const noteContainer = document.querySelector('.note-container');
const textAreaNote = document.querySelector('#note');
const html = document.querySelector('.modal-cont');

button.addEventListener('click', buttonClicked);

function buttonClicked(event) {
    paragraph.remove();

    const div = document.createElement('div');
    noteContainer.appendChild(div);
    div.classList.add('note');

    const number = document.createElement('p');
    div.appendChild(number);
    number.innerText = "Note";
    number.classList.add('note-number');

    const note = document.createElement('p');
    div.appendChild(note);
    note.innerText = textAreaNote.value;
    note.classList.add('note-text');
    textAreaNote.value = "";
}