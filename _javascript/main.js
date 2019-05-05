var btn = document.getElementById('um')
function mudaCor(e) {
    var rgb = 'rgb(' + Math.round(Math.random()*225) + ',' + Math.round(Math.random()*225) + ',' + Math.round(Math.random()*225) + ')';
    console.log(rgb);
    e.target.style.backgroundColor = rgb
}
btn.addEventListener('click', mudaCor)