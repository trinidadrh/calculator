function operate(a,b) {
    let result = 0;
    if (addClick) {
        result = a + b;
        return result;
    } else if (substractClick) {
        result = a - b;
        return result;
    } else if (multiplyClick) {
        result = a * b;
        return result;
    } else {
        result = a / b;
        return result;
    }
};
