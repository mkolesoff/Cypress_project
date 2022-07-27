export class ApiMethod {
    missedCallApi(){
        const requestBody = {
            "json": "{\"call_direction\":1,\"entry_result\":0,\"from\":{\"number\":\"79536462566\"},\"to\":{\"extension\":\"15589\"},\"line_number\":\"74994442310\",\"entry_id\":\"{{$randomPassword}}\"}"
        
        }
            cy.request({
            method: "POST",
            url: "https://dev-telephony.okolo.app/events/summary",
            body: requestBody,
        
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
            "app-token": Cypress.env('token')
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