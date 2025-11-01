let divPiano = document.createElement('div');
divPiano.className = 'piano';
document.body.append(divPiano);

const notes = [
    { note: 'C', white: true, keyCode: 'KeyA', keyboard: 'A' },
    { note: 'Cs', white: false, keyCode: 'KeyW', keyboard: 'W' },
    { note: 'D', white: true, keyCode: 'KeyS', keyboard: 'S' },
    { note: 'Ds', white: false, keyCode: 'KeyE', keyboard: 'E' },
    { note: 'E', white: true, keyCode: 'KeyD', keyboard: 'D' },
    { note: 'F', white: true, keyCode: 'KeyF', keyboard: 'F' },
    { note: 'Fs', white: false, keyCode: 'KeyT', keyboard: 'T' },
    { note: 'G', white: true, keyCode: 'KeyG', keyboard: 'G' },
    { note: 'Gs', white: false, keyCode: 'KeyY', keyboard: 'Y' },
    { note: 'A', white: true, keyCode: 'KeyH', keyboard: 'H' },
    { note: 'As', white: false, keyCode: 'KeyU', keyboard: 'U' },
    { note: 'B', white: true, keyCode: 'KeyJ', keyboard: 'J' },
];

notes.forEach(note => {
    let key = document.createElement('div');
    key.className = note.white ?  'key key-white' : 'key key-black';
    key.dataset.note = note.note;
    key.innerHTML = note.keyboard;
    divPiano.append(key);
});

notes.forEach(note => {
    let sound = document.createElement('audio');
    sound.id = note.note;
    sound.src = `assets/sounds/${note.note}.mp3`;
    document.body.append(sound);
});

function playNote(note) {
    let audio = document.getElementById(note);    
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`[data-note="${note}"]`)
    key.classList.add('active');
    setTimeout(() => {
        key.classList.remove('active'); 
    }, 200);
}

let keys = document.querySelectorAll('.key');

keys.forEach(k => {
    k.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
            playNote(e.target.dataset.note)
        }
    });
});

document.addEventListener('keydown', (e) => {
    const pressedKey = e.code;
    const note = notes.find(n => n.keyCode === pressedKey);
    if (note) {
        playNote(note.note);
    }
});

keys.forEach(key => {
    const editImg = document.createElement('img');
    editImg.className = 'edit-img'
    editImg.src = 'assets/img/edit.png';
    editImg.alt = 'Edit key';
    editImg.title = 'Edit key'
    key.append(editImg)
})

let editForm = document.createElement('form');
editForm.className = 'edit-form';
document.body.append(editForm);

let editInput = document.createElement('input');
editInput.className = 'edit-input';
editInput.type = 'text';
editForm.append(editInput);

let editImages = document.querySelectorAll('.edit-img');
let currentNote = null;

editImages.forEach(img => img.addEventListener('click', () => {
    currentNote = img.parentElement.dataset.note;
    editInput.placeholder = notes.find(n => n.note === currentNote).keyboard;
    editForm.classList.add('active');
    editInput.focus();
}));

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newKey = editInput.value.toUpperCase();
    let newKeyCode = 'Key' + newKey;

    if (notes.some(n => n.keyCode === newKeyCode && n.note !== currentNote)) {
        alert("This key is already use!");
        editInput.value = null;
        return;
    };

    const letter = newKey.trim();
    if (!/^[A-Z]$/.test(letter)) {
        alert("Enter only one letter A-Z");
        editInput.value = null;
        return;
    }

    let noteObj = notes.find(n => n.note === currentNote);
    noteObj.keyCode = newKeyCode;

    document.querySelector(`[data-note="${currentNote}"]`).firstChild.textContent = newKey;
    editInput.value = null;
    editForm.classList.remove('active');
});

let sequenceInput = document.createElement('input');
sequenceInput.className = 'sequence-input';
sequenceInput.type = 'text';
sequenceInput.placeholder = 'Enter the sequence of notes for your melody';
document.body.append(sequenceInput);

