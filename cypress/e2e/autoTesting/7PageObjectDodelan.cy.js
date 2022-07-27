// Page Object - Один из способов логической организации тестов.
// Другие шаблоны проектирования refactoring.guru
// разделение страницы на графические эл-ты и на действия над этими эл-ми
// Можно создавать крупноблочные действия- заполнения данных, подтверждение форм и создавать функции, которые будут использоваться в других тестах
// PageObject будет состоять из описания страницы , бизнес логики, логики тестов 

import { mobileReplenishpent } from "../autoTesting/pages/mobileReplenishment"
import { transfers } from "../autoTesting/pages/transfers"
import { basePage } from "./pages/basePage"

it('Replenishment', ()=> {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    cy.wait(10000)
    mobileReplenishpent.typePhoneNumber('686979712')
    basePage.typAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111', 'Shayne', 'McConnell')
    cy.wait(10000)
    mobileReplenishpent.submitPayment()
    mobileReplenishpent.checkDebitCard('4552 **** **** 8217')
    mobileReplenishpent.checkDebitAmaunt('1')
    mobileReplenishpent.checkDebitAmountAndComission('2')
    mobileReplenishpent.checkPaymentCurrency('UAH')

})

it.skip('Money transfer', ()=> {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '111', 'Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeReceiverNameAndSurname('Juliana', 'Janssen')
    basePage.typAmount('300')
    transfers.typeCurrencyUsd()
    transfers.typeComment('Cypress test')
    transfers.submitPayment()     
    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('300 USD', '308.95')
    transfers.checkDebitComission('8.95 USD') 
       

})