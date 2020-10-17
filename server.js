const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

//Add Basic Calc Route for mortgage
// app.get('/', ((req, res) => res.send("Hello World")));
app.get('/', ((req, res) => res.json({msg: "Hello World"})));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));