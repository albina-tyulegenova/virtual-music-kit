let divPiano = document.createElement('div');
divPiano.className = 'piano';
document.body.append(divPiano);

const notes = [
    { note: 'C', white: true, keyboard: 'A' },
    { note: 'Cs', white: false, keyboard: 'W' },
    { note: 'D', white: true, keyboard: 'S' },
    { note: 'Ds', white: false, keyboard: 'E' },
    { note: 'E', white: true, keyboard: 'D' },
    { note: 'F', white: true, keyboard: 'F' },
    { note: 'Fs', white: false, keyboard: 'T' },
    { note: 'G', white: true, keyboard: 'G' },
    { note: 'Gs', white: false, keyboard: 'Y' },
    { note: 'A', white: true, keyboard: 'H' },
    { note: 'As', white: false, keyboard: 'U' },
    { note: 'B', white: true, keyboard: 'J' },
];

notes.forEach(note => {
    let key = document.createElement('div');
    key.className = note.white ?  'key key-white' : 'key key-black';
    key.dataset.note = note.note;
    key.innerHTML = note.keyboard
    divPiano.append(key);
});

notes.forEach(note => {
    let sound = document.createElement('audio');
    sound.id = note.note;
    sound.src = `assets/sounds/${note.note}.mp3`;
    document.body.append(sound);
});

let keys = document.querySelectorAll('.key');

keys.forEach(k => {
    k.addEventListener('click', playNote);
});

function playNote(e) {
    let key = e.target;
    let note = document.getElementById(key.dataset.note)
    key.classList.add('active');
    note.currentTime = 0;
    note.play();
    setTimeout(() => {
        key.classList.remove('active'); 
    }, 200);
}