export function getDiscountPercentage(normalPrice, discountedPrice) {
    return Math.round(100 - (normalPrice / discountedPrice) * 100);
}
console.log(getDiscountPercentage(75, 100));

export function formatDecimalSpaces(value, decimalSpaces = 2) {
    return +(Math.round(Number(value + `e+${decimalSpaces}`)) + `e-${decimalSpaces}`);
}

console.log(formatDecimalSpaces(15.5555555));

export function convertKrone(amount, toKrone = true, kroneValue = 10.18) {
    if (toKrone) {
        return formatDecimalSpaces(amount * kroneValue);
    }
    return formatDecimalSpaces(amount / kroneValue);
}

console.log(convertKrone(10));

export function calculateTax(amount, taxRate = 25) {
    return formatDecimalSpaces(amount + amount * (taxRate / 100));
}

console.log(calculateTax(100));