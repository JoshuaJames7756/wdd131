const year = document.querySelector("#year");

const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;


const menuButton = document.querySelector("#menu-button");

const navMenu = document.querySelector("#nav-menu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    if (menuButton.textContent === "☰") {

        menuButton.textContent = "✖";

    } else {

        menuButton.textContent = "☰";

    }

});