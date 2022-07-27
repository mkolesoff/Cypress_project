// Page Object - Один из способов логической организации тестов.
// Другие шаблоны проектирования refactoring.guru
// разделение страницы на графические эл-ты и на действия над этими эл-ми
// Можно создавать крупноблочные действия- заполнения данных, подтверждение форм и создавать функции, которые будут использоваться в других тестах
// PageObject будет состоять из описания страницы , бизнес логики, логики тестов 


it('Replenishment', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .wait(10000)
        .get('[data-qa-node="phone-number"]')
        .type('686979712')
        .get('[data-qa-node="amount"]')
        .type('1')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .get('[data-qa-node="submit"]')
        .click()
        .wait(10000)
        .get('[data-qa-node="card"]')
        .should('have.text', '4552 **** **** 8217')
        .get('[data-qa-node="amount"]')
        .eq(1)
        .should('contain.text', '1')
        .get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', '2')
        .get('[data-qa-node="commission-currency"]')
        .should('contain.text', 'UAH')

})

it.only('Money transfer', ()=> {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .get('[data-qa-node="firstNamedebitSource"]')
        .type('Shayne')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('McConnell')
        .get('[data-qa-node="numberreceiver"]')
        .type('5309233034765085')
        .get('[data-qa-node="amount"]')
        .type('300')
        .get('[data-qa-node="currency"]')
        .click()
        .get('[data-qa-value="USD"]')
        .click()
        .get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type('Cypress test')
        .get('[data-qa-node="firstNamereceiver"]')
        .type('Juliana')
        .get('[data-qa-node="lastNamereceiver"]')
        .type('Janssen')
        .get('button[type="submit"]')
        .click()

        .get('[data-qa-node="payer-card"]')  //проверка карыт отпрп
        .should('have.text', '4552 3314 4813 8217')
        .get('[data-qa-node="receiver-card"]') // проверка карты получат
        .should('have.text', '5309 2330 3476 5085')
        .get('[data-qa-node="payer-amount"]')  //проверка суммы отправки
        .should('have.text', '300 USD')
        .get('[data-qa-node="payer-currency"]') //проверка общей комиссии 
        .should('have.text', '8.95 USD')
        .get('[data-qa-node="total"]') // проверка общей суммы
        .find('div') // нашли дочерний элемент под тегом в родительском
        .should('contain.text', '308.95')



})