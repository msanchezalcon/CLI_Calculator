const products = {
    home: {
        type: 'Villa',
        algorithm: 'typeA',
    },
    car: {
        type: 'BMW',
        algorithm: 'typeB',
    },
}

const interestAlgorithm = {
    typeA: (loan, months) => {
        return ((0.03 / months) * loan) // 3% rate
    },

    typeB: (loan, months) => {
        return ((0.025 / months) * loan) // 2.5% rate
    }
}


const calculateInterest = (product, loan, months) => {
    const algorithm = interestAlgorithm[product.algorithm]

    return algorithm(loan, months)
}

module.exports = {
    products,
    calculateInterest,
}
