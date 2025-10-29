let divPiano = document.createElement('div');
divPiano.className = 'piano';
document.body.appendChild(divPiano);

const notes = [
    { note: 'D', white: true },
    { note: 'R', white: false },
    { note: 'F', white: true },
    { note: 'T', white: false },
    { note: 'G', white: true },
    { note: 'H', white: true },
    { note: 'Y', white: false },
    { note: 'J', white: true },
    { note: 'U', white: false },
    { note: 'K', white: true },
    { note: 'I', white: false },
    { note: 'L', white: true },
];

notes.forEach(note => {
    let key = document.createElement('div');
    key.className = note.white ?  'key key-white' : 'key key-black';
    key.dataset.note = note.note;
    key.innerHTML = note.note
    divPiano.appendChild(key);
});
