let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Mortgage API', () => {

    /**
     * Simple Get Test
     */
    describe("GET /api/test", () => {
        it('It should GET a Test Success', function (done) {
            chai.request(server)
                .get("/api/test")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.msg.should.contain('Test Success');
                    done();
                })
        });
    });


    /**
     * Test the Calc Monthly Mortgage Payment POST
     */
    describe("POST /api/calcMonthlyMortgagePayment", () => {
        it('It should POST and return a payment ', function (done) {
            chai.request(server)
                .post("/api/calcMonthlyMortgagePayment")
                .send({
                    "loanAmount": 500000,
                    "interestRate": 4.5,
                    "termInYears": 25
                })
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.payment.should.equal(2779.162389809977);
                    done();
                })
        });
    });

});