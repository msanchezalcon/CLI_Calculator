const prompt = require('prompt-sync')({ sigint: true })
const interest = require('./interest')

const productName = prompt('Choose product type, home or car?: ').toLowerCase()
const product = interest.products[productName]
const loan = parseInt(prompt('What is the loan amount in €?: '))
const months = parseInt(prompt('In how many months would you like to pay the loan?: '))
const result = interest.calculateInterest(product, loan, months)

console.log(`=> Monthly interest estimate of product "${productName}" for a loan of value ${loan} €, financed during a period of ${months} months: ${result} €`)
