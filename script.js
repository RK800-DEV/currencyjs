/* Coded by rk800-dev and fafnir-dragon */

// Currencies
const rouble = 'RUB';
const dollar = 'USD';
const tenge  = 'KZT';
const euro   = 'EUR';

// elements
dollarElement = document.getElementById("dollar");
roubleElement = document.getElementById("rouble");
euroElement = document.getElementById("euro");

document.addEventListener("DOMContentLoaded", () => { 
    calculate();
});

function calculate() {

    // USD to KZT
    fetch("https://api.exchangerate-api.com/v4/latest/" + dollar)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[tenge];
            dollarElement.textContent = rate + " тенге";
    });

    // EUR to KZT
    fetch("https://api.exchangerate-api.com/v4/latest/" + euro)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[tenge];
            euroElement.textContent = rate + " тенге";
    });

    // RUB to KZT
    fetch("https://api.exchangerate-api.com/v4/latest/" + rouble)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[tenge];
            roubleElement.textContent = rate + " тенге";
    });
}