export class BasePage {
    open(domain){
        cy.visit(domain)
    }
    typAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }
    typeDebitCardData(cardNumber, expDate, cvv, firstName, lastName){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
            .get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }


}

export const basePage = new BasePage()