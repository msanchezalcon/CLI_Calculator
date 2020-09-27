const expect = require('chai').expect
const { calculateInterest, products } = require('./interest')

describe('calculateInterest()', () => {
    it('should compute a home product correctly', () => {
        const product = products.home
        const loan = 300
        const months = 3

        const result = calculateInterest(product, loan, months)

        expect(result).to.equal(3.00)
        expect(result).to.be.a('number')
    })

    it('should compute a car product correctly', () => {
        const product = products.car
        const loan = 300
        const months = 3

        const result = calculateInterest(product, loan, months)

        expect(result).to.equal(2.50)
    })

    it('should compute a loan of 0 euros correctly', () => {
        const product = products.home
        const loan = 0
        const months = 3

        const result = calculateInterest(product, loan, months)

        expect(result).to.equal(0)
    })
})
