export class Transfers {

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(receiverCard)
    }
    typeReceiverNameAndSurname(name, lastName){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(lastName)
    }

    typeCurrencyUsd(){
        cy.get('[data-qa-node="currency"]')
            .click()
            .get('[data-qa-value="USD"]')
            .click()
    }
    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }
    submitPayment(){
        cy.get('button,[type="submit"]')
            .contains('Transfer')
            .click()
    }
    checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')  //проверка карыт отпрп
            .should('have.text', debitCard)
            .get('[data-qa-node="receiver-card"]') // проверка карты получат
            .should('have.text', receiverCard)
    }
    checkDebitAmountAndTotalAmount(debitAmaunt, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')  //проверка суммы отправки
            .should('have.text', debitAmaunt)
            .get('[data-qa-node="total"]') // проверка общей суммы
            .find('div') // нашли дочерний элемент под тегом в родительском
            .should('contain.text', totalAmount)
    }
    checkDebitComission(commission){
        cy.get('[data-qa-node="payer-currency"]') //проверка общей комиссии 
        .should('have.text', commission)
    }
}
export const transfers = new Transfers()