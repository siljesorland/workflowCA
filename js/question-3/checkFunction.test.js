test(getDiscountPercentage);
function getDiscountPercentage(normalPrice, discountedPrice) {
    return Math.round(100 - (normalPrice / discountedPrice) * 100);
}
console.log(getDiscountPercentage(75, 100));
export {};
