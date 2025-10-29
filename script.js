let divPiano = document.createElement('div');
divPiano.className = 'piano';
document.body.appendChild(divPiano);

const notes = [
    { note: 'C', white: true, keyboard: 'A' },
    { note: 'C#', white: false, keyboard: 'W' },
    { note: 'D', white: true, keyboard: 'S' },
    { note: 'D#', white: false, keyboard: 'E' },
    { note: 'E', white: true, keyboard: 'D' },
    { note: 'F', white: true, keyboard: 'F' },
    { note: 'F#', white: false, keyboard: 'T' },
    { note: 'G', white: true, keyboard: 'G' },
    { note: 'G#', white: false, keyboard: 'Y' },
    { note: 'A', white: true, keyboard: 'H' },
    { note: 'A#', white: false, keyboard: 'U' },
    { note: 'B', white: true, keyboard: 'J' },
];

notes.forEach(note => {
    let key = document.createElement('div');
    key.className = note.white ?  'key key-white' : 'key key-black';
    key.dataset.note = note.note;
    key.innerHTML = note.keyboard
    divPiano.appendChild(key);
});
