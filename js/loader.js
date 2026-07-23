// Canvas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Loader mesajları
const status = document.getElementById("loader-status");

const messages = [
    "Initializing...",
    "Loading Assets...",
    "Building Experience...",
    "Preparing Portfolio...",
    "Welcome."
];

let i = 0;

setInterval(() => {
    if (i < messages.length - 1) {
        i++;
        status.textContent = messages[i];
    }
}, 900);

// Logo animasyonu
document.querySelectorAll(".loader-logo span").forEach((letter, index) => {
    setTimeout(() => {
        letter.style.opacity = "1";
        letter.style.transform = "translateY(0)";
    }, index * 200);
});

// Subtitle
const subtitle = document.querySelector(".loader-subtitle");

setTimeout(() => {
    subtitle.style.opacity = "1";
    subtitle.style.transform = "translateY(0)";
}, 900);

// Stars
const stars = [];

for (let i = 0; i < 250; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";

        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = -5;
            star.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animate);
}

animate();
setTimeout(() => {

    document.getElementById("loader").style.opacity = "0";

    document.querySelector("main").style.opacity = "1";

    document.getElementById("navbar").style.opacity = "1";

    setTimeout(() => {

        document.getElementById("loader").remove();

    }, 800);

}, 4500);
const hero =
document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{

const x=
(e.clientX-window.innerWidth/2)/40;

const y=
(e.clientY-window.innerHeight/2)/40;

hero.style.transform=
`translate(${x}px,${y}px)`;

});