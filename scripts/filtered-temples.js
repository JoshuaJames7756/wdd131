const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona, United States",
    dedicated: "2014, November, 16",
    area: 64000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
  },
  {
    templeName: "Tucson Arizona",
    location: "Tucson, Arizona, United States",
    dedicated: "2017, August, 13",
    area: 38000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-8384-main.jpg"
  }
];

const container = document.querySelector(".res-grid");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templesList) {
  container.innerHTML = "";

  templesList.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName}"
        loading="lazy">
    `;

    container.appendChild(card);
  });
}

displayTemples(temples);

/* HAMBURGER MENU */

const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});

function closeMenu() {
  navigation.classList.remove("open");
  menuButton.textContent = "☰";
}

/* FILTERS */

document.querySelector("#home").addEventListener("click", () => {
  pageTitle.textContent = "Home";
  displayTemples(temples);
  closeMenu();
});

document.querySelector("#old").addEventListener("click", () => {
  pageTitle.textContent = "Old Temples";

  const filtered = temples.filter(
    temple => parseInt(temple.dedicated) < 1900
  );

  displayTemples(filtered);
  closeMenu();
});

document.querySelector("#new").addEventListener("click", () => {
  pageTitle.textContent = "New Temples";

  const filtered = temples.filter(
    temple => parseInt(temple.dedicated) > 2000
  );

  displayTemples(filtered);
  closeMenu();
});

document.querySelector("#large").addEventListener("click", () => {
  pageTitle.textContent = "Large Temples";

  const filtered = temples.filter(
    temple => temple.area > 90000
  );

  displayTemples(filtered);
  closeMenu();
});

document.querySelector("#small").addEventListener("click", () => {
  pageTitle.textContent = "Small Temples";

  const filtered = temples.filter(
    temple => temple.area < 10000
  );

  displayTemples(filtered);
  closeMenu();
});

/* FOOTER */

document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;