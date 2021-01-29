// Cálculo de aposentadoria

const name = "Sophia";
const gender = "F";
const age = 52;
const contribution = 26;

if (gender === 'M' && age + contribution >= 95 || gender === 'F' && age + contribution >= 85 ) {
    console.log(`${name}, you are legible to retire!`);
} else {
    console.log(`${name}, you are not legible to retire!`);
}