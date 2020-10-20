const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const PORT = process.env.PORT || 5000;

// https://blog.logrocket.com/documenting-your-express-api-with-swagger/
// Extended https://swagger.io/specification/#info-object
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Mortgage Calculation API",
            description: "Mortgage Calculator API",
            contact: {
                name: "Richard Hounslow",
                url: "http://www.rhounslow.com.au",
                email: "rhounslow@gmail.com"
            },
            servers: ["http://localhost:5000"]
        }
    },
    // ['./routes/*.js']
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Init Middleware - So we can accept body data
app.use(express.json({extended: false}));

/**
 * @swagger
 * /test:
 * get:
 *  description: Get test
 *  responses:
 *    '200':
 *      description: A successful response
 */
app.get("/api/test", (req, res) => {
  res.json({msg: "Test Success"});
});

/**
 * @swagger
 * /api/calcMonthlyMortgagePayment:
 * post:
 *  description: Get mortgage monthl;y payment
 *  responses:
 *    '200':
 *      description: A successful response
 */
app.use('/api/calcMonthlyMortgagePayment', require('./routes/calcMonthlyMortgagePayment'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
});

module.exports = app