// Cálculo de IMC

const name = 'Luiz';
const weight = 120;
const height = 2.02;
const BMI = weight / (height * height);

if (BMI >= 30) {
    console.log(`${name} you are above weight.`);
} else {
    console.log(`${name} you are not above weight.`);
}