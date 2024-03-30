const audio = document.getElementById('audio');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const animation = document.getElementById('animation');

playIcon.addEventListener('click', () => {
    audio.play();
    playIcon.style.display = 'none';
    stopIcon.style.display = 'inline-block';
    animation.style.display = 'none'; 
});

stopIcon.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playIcon.style.display = 'inline-block';
    stopIcon.style.display = 'none';
    animation.style.display = 'none'; 
});

audio.addEventListener('play', () => {
    animation.style.display = 'block';
    playIcon.style.display = 'none'; 
    stopIcon.style.display = 'none'; 
    setTimeout(() => {
        animation.style.display = 'none';
        stopIcon.style.display = 'inline-block'; 
    }, 7000);
});