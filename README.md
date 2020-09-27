# Simple CLI Interest Calculator

## Description
Interest calculator running in the command line. It prompts the user to choose between different products associated to a different interest rate. The user can then choose the loan amount and the total payment period. Finally, the calculator returns the monthly interest.
```bash
node cli.js
```

## Approach
Following the Strategy Pattern, it is easy to scalate the app and keep adding different products and algorithms associated to the different interest rates.

## Testing
Unit Testing was done during the development phase using Chai and Mocha.
```bash
npm i --save-dev mocha chai
npm test
```