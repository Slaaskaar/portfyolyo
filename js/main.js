import { translations } from "./translations.js";
import "./loader.js";
import "./hero.js";
import "./cursor.js";
import "./magnetic.js";

/* ===========================
      MOBILE MENU
=========================== */

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            nav.classList.remove("active");
        });
    });
}

/* ===========================
      THEME
=========================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        themeBtn.textContent =
            document.body.classList.contains("light")
                ? "☀️"
                : "🌙";
    });
}

/* ===========================
      LANGUAGE SYSTEM
=========================== */

const langToggle = document.getElementById("lang-toggle");

let currentLang = localStorage.getItem("language") || "tr";

function changeLanguage(lang) {

    currentLang = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }

    });

    if (langToggle) {
        langToggle.textContent = lang.toUpperCase();
    }

    localStorage.setItem("language", lang);
}

changeLanguage(currentLang);

if (langToggle) {

    langToggle.addEventListener("click", () => {

        if (currentLang === "tr") {
            changeLanguage("en");
        } else {
            changeLanguage("tr");
        }

    });

}