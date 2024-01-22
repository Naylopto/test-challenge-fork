function factCalc(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factCalc(numero - 1);
    }
}


module.exports = factCalc;
