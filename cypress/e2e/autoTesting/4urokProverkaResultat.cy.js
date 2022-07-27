/// < reference types = 'Cypress' />

// Assertions проыерка ожидаемого результата (можно найти в документации)
// sould, and  явные проверки, expect - неявные
it('assertions', () => {
    cy.visit('https://www.drive2.ru/')
    cy.get(".x-search__input")
        .type(100)  //  ввели в поле 100
        .should('have.value', 100) // проверили что в поле 100
        .and('be.visible') // проверили что видно значение

}

)

it('EXPECT', () => {
    cy.visit('https://www.drive2.ru/')
    cy.get(".x-search__input")
        .type(100).then( input => {
            expect(input).to.have.value(100)

        })  // ввели в поле 100, затем вызвали функцию then у которой в качестве аргумента input, а в ней функцию expect и в ней что данный input должен и через точку что должен

}

)
it('check default value', () => {
    cy.viewport(2000, 1000)
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-value="UAH"]')
        .should('be.checked')
         // нашли элемент и проверили что он содержит атрибут checked (другие свойства можно посмотреть в properties в консоли)

})

it('check is visible', () => {
    cy.viewport(2000, 1000)
    cy.visit('https://www.banki.ru/')
    cy.get('[data-submenu-idx="deposits"]')
        .trigger('mouseover')
        .contains('Подбор кредита')
        .should('be.visible')
         // нашли элемент навели мышь , нашли другой элемент , проверили видимость 
})

it.only('check is correct button', () => {
    cy.viewport(2000, 1000)
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
         // нашли элемент и проверили что атрибут тип соответсвует button

})

it('check is correct url', () => {
    cy.viewport(2000, 1000)
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
         // нашли элемент и проверили что атрибут тип соответсвует button

})

it.only('check is correct url', () => {
    cy.viewport(2000, 1000)
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en')
        // проверка что урл на который перешли совпадает с тем на который хотели
})