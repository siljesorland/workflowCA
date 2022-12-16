import { expect, test } from "@jest/globals";
import {
    getDiscountPercentage,
    formatDecimalSpaces,
    convertKrone,
    calculateTax
} from "./question-3.js";


test('get discounted price', function () {
    expect(getDiscountPercentage(25, 100)).toBe(75)
})

test('get decimal spaces', function () {
    expect(formatDecimalSpaces(15.56, 1)).toBe(15.6)
})

test('check convert to krone function', function () {
    expect(convertKrone(100)).toBe(1018)
})

test('check calculate tax function', function () {
    expect(calculateTax(125)).toBe(156.25)
})