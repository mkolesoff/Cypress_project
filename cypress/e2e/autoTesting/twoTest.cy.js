/// <reference types="Cypress" />
// eq - ищет элемент по индексу (те по порядку)
// find - пробигается по вложенности, по дочерним элементам
it('Using get with find and eq', () => {
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('td').find('div').find('button').eq(0)

})

it.only('Using get with find and eq', () => {
    cy.visit('https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#What-you-ll-learn')
    cy.get('nav').find('ul').find('li').find('a').eq(1)

})