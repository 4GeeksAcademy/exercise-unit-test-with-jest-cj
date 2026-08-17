const sum = (a, b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };