let divPiano = document.createElement('div');
divPiano.className = 'piano';
document.body.appendChild(divPiano);

const notes = [
    { note: 'C', white: true },
    { note: 'C#', white: false },
    { note: 'D', white: true },
    { note: 'D#', white: false },
    { note: 'E', white: true },
    { note: 'F', white: true },
    { note: 'F#', white: false },
    { note: 'G', white: true },
    { note: 'G#', white: false },
    { note: 'A', white: true },
    { note: 'A#', white: false },
    { note: 'B', white: true },
];

notes.forEach(note => {
    let key = document.createElement('div');
    key.className = note.white ?  'key key-white' : 'key key-black';
    key.dataset.note = note.note;
    key.innerHTML = note.note
    divPiano.appendChild(key);
});
