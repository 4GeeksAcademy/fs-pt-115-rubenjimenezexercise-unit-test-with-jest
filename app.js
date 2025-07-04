// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDolar) {
    // Convertimos el valor a Yenes
    let valueInEuro = valueInDolar / oneEuroIs.USD;
    // Retornamos el valor en Yenes
    return valueInEuro * oneEuroIs.JPY;
}
// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInPound) {
    // Convertimos el valor a Yenes
    let valueInEuro =  valueInPound / oneEuroIs.JPY;
    // Retornamos el valor en Yenes
    return valueInEuro * oneEuroIs.GBP;
}


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar,fromYenToPound,fromDollarToYen  }
