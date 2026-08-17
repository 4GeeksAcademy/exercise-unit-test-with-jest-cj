const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be converted to yen correctly", function() {
    const yens = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yens).toBe(expected);
});

test("One yen should be converted to pound correctly", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
});