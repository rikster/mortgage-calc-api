const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

// Init Middleware
// So we can accept body data
app.use(express.json({ extended: false }));

//Add Basic Routes
//app.get('/', ((req, res) => res.send("Hello World")));
//app.get('/', ((req, res) => res.json({msg: "Hello World"})));

//Define Routes
app.use('/api/calcMonthlyMortgagePayment', require('./routes/calcMonthlyMortgagePayment'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));