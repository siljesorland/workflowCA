import { expect } from "@jest/globals";
import { getDiscountPercentage } from "./question-3.js";
import { formatDecimalSpaces } from "./question-3.js";
import { convertKrone } from "./question-3.js";
import { calculateTax } from "./question-3.js";


test('get discounted price', function() {
        expect(getDiscountPercentage(25)).toBe(true)
    }),

    test('get decimal spaces', function() {
        expect(formatDecimalSpaces(15.56)).toBe(true)
    }),

    test('check convert to krone function', function() {
        expect(convertKrone(101.80)).toBe(true)
    }),

    test('check calculate tax function', function() {
        expect(calculateTax(125)).toBe(true)
    }),