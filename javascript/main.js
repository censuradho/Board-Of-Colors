var btn = document.getElementById('um')
function mudaCor(e) {
    var rgb = 'rgb(' + Math.round(Math.random()*225) + ',' + Math.round(Math.random()*225) + ',' + Math.round(Math.random()*225) + ')';
    console.log(rgb);
    e.target.style.backgroundColor = rgb
}
function clickSound() {
    var sound = new Audio;
    sound.src = 'audio-button.mp3';
    sound.play();
}
btn.addEventListener('click', mudaCor);
btn.addEventListener('click', clickSound);