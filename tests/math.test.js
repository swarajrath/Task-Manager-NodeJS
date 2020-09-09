const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../src/math')

test('Should calculate tip with total', () => {
    const total = calculateTip(10, 30)
    expect(total).toBe(13)
})

test('Should calculate total with deafult tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12)
})

test('The Fahrenheit tempreature should be', () => {
    const convert = celsiusToFahrenheit(98)
    expect(convert).toBe(208.4)
})

test('The Celcius tempreature should be', () => {
    const convert = fahrenheitToCelsius(32)
    expect(convert).toBe(0)
})

test('Should add 2 numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add two numbers async/await', async () => {
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})