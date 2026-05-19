const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];


// FOR LOOP
console.log("FOR LOOP");

for (let i = 0; i < studentReport.length; i++) {

    if (studentReport[i] < LIMIT) {

        console.log(studentReport[i]);

    }

}


// WHILE LOOP
console.log("WHILE LOOP");

let i = 0;

while (i < studentReport.length) {

    if (studentReport[i] < LIMIT) {

        console.log(studentReport[i]);

    }

    i++;

}


// FOREACH LOOP
console.log("FOREACH LOOP");

studentReport.forEach(function(score) {

    if (score < LIMIT) {

        console.log(score);

    }

});


// FOR...IN LOOP
console.log("FOR...IN LOOP");

for (let index in studentReport) {

    if (studentReport[index] < LIMIT) {

        console.log(studentReport[index]);

    }

}


// FUTURE DAYS
console.log("FUTURE DAYS");

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const today = new Date().getDay();

for (let i = 0; i < DAYS; i++) {

    let futureDay = (today + i) % 7;

    console.log(dayNames[futureDay]);

}