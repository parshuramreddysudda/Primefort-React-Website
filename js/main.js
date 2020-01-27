var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('We <br> Secure <br> Startups.')
    .pauseFor(1500)
    .deleteChars(9)
    .typeString("MSME's.")
    .pauseFor(1500)
    .deleteChars(7)
    .typeString('Enterprises.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('We <br> are <br> Good Hackers.')
    .pauseFor(2500)
    .start();
