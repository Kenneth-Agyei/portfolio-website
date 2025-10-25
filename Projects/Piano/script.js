const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click", handleKeyClick), {once: true});


// Keyboard-to-note mapping (adjust keys/notes as needed)
const KEY_TO_NOTE = {
  'a': 'C',
  'q': 'Db',
  's': 'D',
  'w': 'Eb',
  'd': 'E',
  'f': 'F',
  'e': 'Gb',
  'g': 'G',
  'r': 'Ab',
  'h': 'A',
  't': 'Bb',
  'j': 'B'
};

// Handle keyboard presses
document.addEventListener('keydown', (e) => {
  const note = KEY_TO_NOTE[e.key.toLowerCase()];
  if (note) {
    const key = document.querySelector(`.key[data-note="${note}"]`);
    if (key) {
      key.click(); // Trigger the key's click handler
      key.classList.add('active'); // Visual feedback
    }
  }
});

// Remove visual feedback on key release (optional)
document.addEventListener('keyup', (e) => {
  const note = KEY_TO_NOTE[e.key.toLowerCase()];
  if (note) {
    const key = document.querySelector(`.key[data-note="${note}"]`);
    if (key) key.classList.remove('active');
  }
});


function handleKeyClick() {
    playKey(this);
}
function playKey(key) {
    const keyAudio = document.getElementById(key.dataset.note);
    keyAudio.currentTime = 0;
    keyAudio.play();
    key.classList.add("active");
    keyAudio.addEventListener("ended", ()=>{
        key.classList.remove("active");
    });
}