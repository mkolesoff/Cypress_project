// модификация ответа с сервера на клиент (или наоборот), чтобы они соответствовали ожидаемому результату
// MOCK - предназначается для проверки поведения приложения (подмена ответа)  STUB - технология направленая на проверку состояния тестируемого объекта
// моки и сабы храняться в фикстурах

import { mobileReplenishpent } from "../autoTesting/pages/mobileReplenishment"
import { transfers } from "../autoTesting/pages/transfers"
import { basePage } from "./pages/basePage"
import { archivePage } from "./pages/archive"

beforeEach('setuo success response with stub', ()=> {      // функция чтобы задать предварительные условия для теста
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?',     {    //в intercept аргументом указываем что мы используем (в данном случае урл запроса ответ которого подменяем)
        fixture:'confirmResponse/success.json',                                   // передаем фикстуру в которой указан нужный ответ 
    });
  //ТАКИМ ОБРАЗОМ МЫ ГОВОРИМ ЧТО МЫ ОТСЛЕЖИВАЕМ ДАННЫЙ ЗАПРС И НА НЕГО НАМ НАДО ПРОКИНУТЬ ТАКОЙ ОТВЕТ КАК В ФИКСТУРЕ
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive',    {
        fixture: 'archiveResponse/success.json',    // выбираем запрос и присылаем нужный ответ на него
    });
});

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
    cy.contains('Pay')
        .click();
    //добавить кнопку 

})

it.only('check state of payment in the archive public session', ()=> {
    basePage.open('https://next.privat24.ua/?lang=en');
    archivePage.selectArchiveMenu()
        
})