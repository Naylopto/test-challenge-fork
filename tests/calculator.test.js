const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b to equal 3', () => {
    expect(calculator.add(1,2)).toBe(3);
})

test('substracts a - b to equal 2', () => {
   expect(calculator.substract(5,3)).toBe(2);
})

test('multiplies a * b to equal 36', () => {
    expect(calculator.multiply(4,9)).toBe(36)
})

test('divides a / b to equal 2.5', () => {
    expect(calculator.divide(5,2)).toBe(2.5);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(5,4)).toBe(625)
})

