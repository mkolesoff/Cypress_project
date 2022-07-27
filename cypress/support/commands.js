// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
export class ApiMethod {
    missedCallApi(clientPhone){
        const requestBody = {
            "call_direction":1,
            "entry_result":0,
            "from":{"number":clientPhone},
            "to":{"extension":"15589"},
            "line_number":"74994442310",
            "entry_id":"{{$randomPassword}}"
        
        }
            cy.request({
            method: "POST",
            url: "https://dev-telephony.okolo.app/events/summary",
            body: requestBody,
        
        })
            .then((response) => {
                expect(response.body).to.have.property('success').to.equal(true)
            })
    }
    incidentsCreate(){
        const requestBody = {
            "order_id": 10392404,
            "type": "collect",
            "problem": "2",
            "channel": "chat",
            "comment": "тест cypress",
            "user_type": "operator"
    
    }
        const headersData = {
            "app-token": "-3MiIRHg3pn4UPmLMO4gp"
        }
        cy.request({
        method: "POST",
        url: "https://dev-orders.okolo.app/api/v2/incidents/create",
        body: requestBody,
        headers: headersData,
    
    })
        .then((response) => {
            expect(response).to.have.property('status').to.equal(200)
        })
    }

}

export const apiMethod = new ApiMethod()