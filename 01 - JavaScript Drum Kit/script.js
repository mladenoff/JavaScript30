const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // if key is not in drumkick, stop the function
  audio.currentTime = 0; // if an audio element is already playing, stop it
  audio.play();
  key.classList.add('playing');
};

window.addEventListener('keydown', playSound);

const removeTransition = function removeTransition(e) {
  if (e.propertyName !== 'transform') { return; }
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
