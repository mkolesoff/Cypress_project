/// <reference types="Cypress" /> 
import { apiMethod } from '../../support/pages/apiMethod'
import { authUser } from "../../support/pages/authPages"
import { menuPages } from "../../support/pages/menuPages"
beforeEach( () => {
    authUser.takeToken('9536462566')

    })
it('Incidents Create', () => {
    
    const requestBody = {
        "order_id": 10392404,
        "type": "collect",
        "problem": "2",
        "channel": "chat",
        "comment": "тест cypress",
        "user_type": "operator"

}
    const headersData = {
        "app-token": Cypress.env('token')
    }
    console.log('HEADER = ', headersData)
    cy.request({
    method: "POST",
    url: "https://dev-orders.okolo.app/api/v2/incidents/create",
    body: requestBody,
    headers: headersData,

})
    .then((response) => {
        expect(response).to.have.property('status').to.equal(200)
    })

})