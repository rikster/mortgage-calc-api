#Mortgage Calulators
Provide an api for calcluating mortgages
  1. Monthly Mortgage Payment
  2. Monthly Mortgage Payment With Extra Monthly Payments

## Getting Started

```bash
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Calculate Monthly Mortgage Payment [POST /api/calcMonthlyMortgagePayment]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "loanAmount": "500000",
              "interestRate": "4.5",
              "termInYears": "25"
            }

- Response: 200 (application/json)

  - Body

          {
            "payment": "2779.16"
          }

 ## Calculate Monthly Mortgage Payment  With Extra Monthly Payments [POST /api/calcMonthlyMortgagePaymentExtra]
 
 - Request: Add user and request JSON web token
 
   - Headers
 
         Content-type: application/json
 
   - Body
 
             {
               "loanAmount": "500000",
               "interestRate": "4.5",
               "termInYears": "25",
               "extraPaymentAmount" : "300"
             }
 
 - Response: 200 (application/json)
 
   - Body
 
           {
           	withExtraPayment : {
           		totalMonthlyPayment : 4236.69,
           		interestRate : 6.75,
           		term : 5,
           		totalCost : 233018.07,
           		payments : [{ // Array of Annual Break Down
           			annualInterestPayment: 12322.85,
           			annualPrincipalPayment: 38517.47,
           			balance: 161482.53,
           			monthlyBreakdown: [{ // Array of monthly breakdowns
           				monthlyPayment : 4236.69,
           				principalPayment :  3111.69,
           				interestPayment :  1125,
           				balance :  196888.31
           			}...]
           		}...]
           	},
           	withoutExtraPayment : {
           		totalMonthlyPayment : 3936.69,
           		interestRate : 6.75,
           		term : 5,
           		totalCost : 236201.53
           	}
           }
