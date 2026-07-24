const hero = document.querySelector(".hero-content");
const orb1 = document.querySelector(".orb1");
const orb2 = document.querySelector(".orb2");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX - window.innerWidth / 2) / 35;
    const y = (e.clientY - window.innerHeight / 2) / 35;

    if (hero) {
        hero.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (orb1) {
        orb1.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
    }

    if (orb2) {
        orb2.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
    }

});
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scroll =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    progressBar.style.width =
        (scroll/height)*100 + "%";

});
const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(card=>{

        const top =
        card.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            card.classList.add("active");

        }

    });

});

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-150;

if(scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
const cursor =
document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove",(e)=>{

    light.style.left = e.clientX + "px";
    light.style.top  = e.clientY + "px";

});





document.querySelectorAll(".project-card").forEach((card) => {

    const images = card.querySelectorAll(".project-slider img");
    const dots = card.querySelectorAll(".dot");
    const prev = card.querySelector(".prev");
    const next = card.querySelector(".next");

    if (!images.length) return;

    let index = 0;
    let interval;

    function showSlide(i) {

        images.forEach(img => img.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        images[i].classList.add("active");

        if (dots[i]) {
            dots[i].classList.add("active");
        }

    }

    function nextSlide() {

        index++;

        if (index >= images.length) {
            index = 0;
        }

        showSlide(index);

    }

    function prevSlide() {

        index--;

        if (index < 0) {
            index = images.length - 1;
        }

        showSlide(index);

    }

    function startSlider() {

        interval = setInterval(nextSlide, 4000);

    }

    function stopSlider() {

        clearInterval(interval);

    }

    if (next) {

        next.addEventListener("click", () => {

            nextSlide();
            stopSlider();
            startSlider();

        });

    }

    if (prev) {

        prev.addEventListener("click", () => {

            prevSlide();
            stopSlider();
            startSlider();

        });

    }

    dots.forEach((dot, i) => {

        dot.addEventListener("click", () => {

            index = i;

            showSlide(index);

            stopSlider();
            startSlider();

        });

    });

    card.addEventListener("mouseenter", stopSlider);
    card.addEventListener("mouseleave", startSlider);

    startSlider();

});
// ===== LIGHTBOX =====

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentImages = [];
let currentIndex = 0;

document.querySelectorAll(".project-card").forEach(card=>{

    const images = card.querySelectorAll(".project-slider img");

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            currentImages = [...images];

            currentIndex = index;

            lightbox.classList.add("active");

            lightboxImg.src = currentImages[currentIndex].src;

        });

    });

});

function showLightboxImage(){

    lightboxImg.src = currentImages[currentIndex].src;

}

nextBtn.onclick = ()=>{

    currentIndex++;

    if(currentIndex >= currentImages.length){

        currentIndex = 0;

    }

    showLightboxImage();

};

prevBtn.onclick = ()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = currentImages.length-1;

    }

    showLightboxImage();

};

closeBtn.onclick = ()=>{

    lightbox.classList.remove("active");

};

lightbox.onclick = (e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

};

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});
