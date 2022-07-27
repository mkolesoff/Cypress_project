export class AuthUser{
    SuccessAuthUser(number){
        const requestBody = { 
            phone: number, 
        }
        
        cy.visit('/auth')
            .get('.field__input-wrapper')
            .type(number)
            .wait(3000)
        cy.request({
            method: "POST",
            url: "https://dev-auth.okolo.app/mod/employee/get-code-by-phone",
            body: requestBody,
        }).its('body').then((body) => {
            const code = body.code;
            cy.get('[placeholder="Введите код из смс"]')
                
                .eq(0)
                .type(code)
                .wait(5000)
            
            
        })
    }
    
    takeToken(number){
        const requestBody = { 
            phone: number, 
        }
        cy.request({
            method: "POST",
            url: "https://dev-auth.okolo.app/api/employee/gencode",
            body: requestBody,
        })
        cy.request({
            method: "POST",
            url: "https://dev-auth.okolo.app/mod/employee/get-code-by-phone",
            body: requestBody,
        }).its('body').then((body) => {
            const code = body.code;
            cy.request({
                method: "POST",
                url: "https://dev-auth.okolo.app/api/employee/auth",
                body:{
                    "app": "crm",
                    "code": code,
                    "device_id": "Tk3j1TGKcsedLnjHAc4w",
                    "phone": number,
                }
            }).then((response) => {
                Cypress.env('token', response.body.session.token)
                console.log('Токен =', Cypress.env('token'))

                
                
            })
            
        })
    }

}

export const authUser = new AuthUser()