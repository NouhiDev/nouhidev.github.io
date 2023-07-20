// ░█▄─░█ ░█▀▀▄ ░█▀▀▀ ░█──░█ 　 ░█▀▀▀█ ▀█▀ ▀▀█▀▀ ░█▀▀▀ 　 ───░█ ░█▀▀▀█ 
// ░█░█░█ ░█─░█ ░█▀▀▀ ─░█░█─ 　 ─▀▀▀▄▄ ░█─ ─░█── ░█▀▀▀ 　 ─▄─░█ ─▀▀▀▄▄ 
// ░█──▀█ ░█▄▄▀ ░█▄▄▄ ──▀▄▀─ 　 ░█▄▄▄█ ▄█▄ ─░█── ░█▄▄▄ 　 ░█▄▄█ ░█▄▄▄█

// Site-specific JavaScript for their respective individual needs

// ! Requires ndev-global.js to function correctly ! (https://nouhi.dev/assets/global-scripts/ndev-global.js)

var typed = new Typed(".auto-type", {
    strings: ["Developer", "Game Designer", "Graphic Designer"],
    typeSpeed: 150,
    backSpeed: 100,
    startDelay: 1000,
    loop: true,
});

document.getElementById("btn").onclick = function () {
    location.href = "https://nouhidev.github.io/projects/";
};