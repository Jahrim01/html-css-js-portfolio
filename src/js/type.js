var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer👨‍💻')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Passionate of "IT"')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Love Coding 👨‍💻</strong>')
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('<strong>Gaming 🎮 </strong>')
    .pauseFor(2500)
    .start();

var app2 = document.getElementById('app2');

var typewriter2 = new Typewriter(app2, {
        loop: true
});
    
typewriter2.typeString('HI,')
        .pauseFor(1500)
        .deleteAll()
        .typeString('I`m Mirija')
        .pauseFor(2000)
        .deleteChars(6)
        .typeString('Developer')
        .pauseFor(2000)
        .deleteAll()
        .typeString('I`m passionate about everything around Information Technology')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Thanks for visiting my portfolio :)')
        .pauseFor(2000)
        .start();