// getdates.js — WDD 131, Edgar Joshua Miranda
// Populates current year and last modified date dynamically

// Current year in footer copyright
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Last modified date
document.getElementById("lastModified").innerHTML =
  "Last Modification: " + document.lastModified;