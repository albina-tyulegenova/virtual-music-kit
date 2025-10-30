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
    key.innerHTML = note.keyboard
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

document. addEventListener('keydown', (e) => {
    const pressedKey = e.code;
    const note = notes.find(n => n.keyCode === pressedKey);
    if (note) {
        playNote(note.note);
    }
});