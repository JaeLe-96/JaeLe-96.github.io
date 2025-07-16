const audioContext = new(window.AudioContext || window.webkitAudioContext)();
const audio = document.getElementById('myAudio');
const source = audioContext.createMediaElementSource(audio);
const gainNode = audioContext.createGain();

source.connect(gainNode);
gainNode.connect(audioContext.destination);

function fadeOutWebAudio(duration = 2) { // duration in seconds
    const currentTime = audioContext.currentTime;
    gainNode.gain.setValueAtTime(gainNode.gain.value, currentTime);
    gainNode.gain.linearRampToValueAtTime(0, currentTime + duration);
    // Optionally pause the audio after the fade completes
    setTimeout(() => audio.pause(), duration * 1000);
}

// To initiate fade out:
audio.play();
fadeOutWebAudio();