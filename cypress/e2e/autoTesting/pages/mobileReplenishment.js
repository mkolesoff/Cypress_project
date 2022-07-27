export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }
    typeDebitCardData(cardNumber, expDate, cvv, firstName, lastName){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
            
    }
    
    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }
    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }
    checkDebitAmaunt(debitAmaunt){
        cy.get('[data-qa-node="amount"]')
            .eq(1)
            .should('contain.text', debitAmaunt)
    }
    checkDebitAmountAndComission(debitComission){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', debitComission)
    }
    checkPaymentCurrency(paymentCurrency){
        cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', paymentCurrency)
    }
}

export const mobileReplenishpent = new MobilePhoneReplenishment()