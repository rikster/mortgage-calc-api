const express = require('express');
const router = express.Router();

// @route   POST api/calcMonthlyMortgagePayment
// @desc    Calculate Monthlu MortgagePayments
// @access  Public
router.post('/', (req, res) => {
    //res.send('Calc monthly mortgage payment');

    const {loanAmount, interestRate, termInYears} = req.body;

    var principal = loanAmount;
    var intRate = interestRate == 0 ? 0 : interestRate / 100;
    var monthlyInterestRate = intRate == 0 ? 0 : intRate / 12;
    var numberOfMonthlyPayments = termInYears * 12;

    var payment = (((monthlyInterestRate * principal * (Math.pow((1 + monthlyInterestRate), numberOfMonthlyPayments)))) / ((Math.pow((1 + monthlyInterestRate), numberOfMonthlyPayments)) - 1));

    res.json({
        "payment": payment
    });

});

module.exports = router;