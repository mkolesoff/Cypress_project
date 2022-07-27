/// <reference types="Cypress" /> 
import { apiMethod } from '../../support/pages/apiMethod'
import { authUser } from "../../support/pages/authPages"
import { menuPages } from "../../support/pages/menuPages"
beforeEach( () => {
    authUser.takeToken('9536462566')

    })

it('Missed Call', () => {
    const clientPhone = "79536462566"
    authUser.SuccessAuthUser('9852840504')
    cy.wait(3000)
    cy.reload()
    menuPages.openMenu()
    cy.get('[data-cy="tasks"]').contains('Тикеты').click()
    apiMethod.missedCallApi()
    cy.get('[data-cy="select-label"]').eq(2).click()
        .get('.list-suggest-item').contains('Сначала новые').click()
        .wait(3000)
        .get('[data-cy="table-row-0"]').eq(1).click()
        .get('[data-cy="ticket-lpage-take-to-work-btn"]').click()
        .get('[data-cy="ticket-lpage-close-ticket-btn"]').click()
        .wait(3000)
        .get('[data-cy="ticket-order-id"]').eq(1).click()
        .get('.ticket-modal-order').eq(0).click()
        .get('[data-cy="multiple-select-label"]').click()
        .get('[data-cy="select-option"]').contains('Привезли не тот товар').click()
        .get('[data-cy="multiple-select-label"]').click()
        .get('[data-cy="textarea-field"]').type('Cypress test')
        .get('[data-cy="close-ticket-modal-btn"]').click()

    
})

it.only('Incidents Create', () => {
    authUser.SuccessAuthUser('9852840504')
    cy.wait(3000)
    cy.reload()
    menuPages.openMenu()
    cy.get('[data-cy="tasks"]').contains('Тикеты').click()
    apiMethod.incidentsCreate()
    cy.get('[data-cy="select-label"]').eq(2).click()
        .get('.list-suggest-item').contains('Сначала новые').click()
        .wait(3000)
        .get('[data-cy="table-row-0"]').eq(1).click()
        .get('[data-cy="ticket-lpage-take-to-work-btn"]').click()
        .get('[data-cy="ticket-lpage-close-ticket-btn"]').click()
        .wait(3000)
        .get('[data-cy="select-label"]').contains('Выберите тип решения').click()
        .get('[data-cy="select-option"]').contains('Клиенту выдан промокод').click()
        .get('[data-cy="select-label"]').contains('Выберите виновника инцидента').click()
        .get('[data-cy="select-option"]').contains('Сборщик').click()
        .get('[data-cy="textarea-field"]').type('Cypress test')
        .get('[data-cy="close-incident"]').click()

})

it.only('test', ()=> {
    authUser.takeToken('9536462566')
})