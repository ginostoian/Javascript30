
const keys = document.querySelectorAll('.key');

function playSound (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return // stops the function from running
    audio.currentTime = 0; // rewind to start each time function runs
    audio.play();
    key.classList.add('playing');
}
function removeTransition (event) {
    if (event.propertyName !== 'transform') return; // skip function if event is not transform
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);