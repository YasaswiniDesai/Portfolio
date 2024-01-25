document.addEventListener('DOMContentLoaded', function () {
    function createDot(className) {
        const dot = document.createElement('div');
        dot.className = 'dot ' + className;
        dot.style.left = Math.random() * window.innerWidth + 'px';
        dot.style.top = Math.random() * window.innerHeight + 'px';
        document.getElementById('dots-container').appendChild(dot);
    }
    for (let i = 0; i < 85; i++) {
        createDot('small');
        createDot('smaller');
        createDot('smallest');
    }
    var typed = new Typed(".auto-type",{
        strings:["FrontEnd Developer","Graphic Designer","Techie"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    }) 
});