// https://example.cypress.io/commands/actions дока
// .type() ввести значение .focus() кликнуть в поле .blur() вызов валидатора  .clear() очищает форму .submit() подтверждает форму .click() клик .dblclick() 2й клик
// .rightclick() клик пкм .check() работа с радиокнопками и чекбоксами .uncheck() только с чекбоксами .select() выбор из списка .scrollIntoView() скролить к определенному эл-ту
//  cy.scrollTo() скролить к координатам .trigger() использование определенных ивентов 
/// <reference types="Cypress" />

it('type', () => {
    cy.visit('http://automationpractice.com/index.php')
        .get('#search_query_top')
        .type('Blouse') //ввели в поле текст
})

it('focus', () => {
    cy.visit('http://automationpractice.com/index.php')
        .get('#search_query_top')
        .focus()  //произвели клик по полю
})

it('blur', () => {
        cy.visit('http://automationpractice.com/index.php')
            .get('#search_query_top')
            .focus()  //произвели клик по полю
            .blur()  //сделали валидацию
})

it('clear', () => {
        cy.visit('http://automationpractice.com/index.php')
            .get('#search_query_top')
            .type(123456) //ввели число
            .wait(2000)
            .clear()  //очистили поле
           
})

it('submit', () => {
    cy.visit('http://automationpractice.com/index.php')
        .get('form[method="get"]')
        .submit()  //подтвердить форму, для этого надо найти form и использовать содержащийся в ней метод
       
})

it('click', () => {
    cy.visit('http://automationpractice.com/index.php')
        .get('.blockbestsellers').contains('Best Sellers')  //нашел элемент 
        .click()  //кликнул элемент
       
})

it('rightclick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')  //нашел элемент 
        .rightclick()  //кликнул элемент правой кнопкой
       
})

it('dblclick', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
        .contains('My Card')  //нашел элемент 
        .dblclick()  //кликнул элемент двумя кнопками
       
})

it('check', () => {
    cy.visit('https://passport.yandex.ru/registration?origin=home_desktop_ru&retpath=https%3A%2F%2Fmail.yandex.ru%2F&process_uuid=9fb50463-0a25-411c-b7ab-42f2e78a1e76')
      
        .get('#keep_unsubscribed')  //нашел элемент для check type должен быть radio или checkbox
        .check()  //выбрал чекбокс 
       
})

it('uncheck', () => {
    cy.visit('https://passport.yandex.ru/registration?')
      
        .get('#eula_accepted')  //нашел элемент для ceck type должен быть radio или checkbox
        .uncheck()  //выбрал чекбокс 
       
})

it('select', () => {
    cy.visit('https://www.drive2.ru/experience')
      
        .get('#BrandName')  //нашел элемент выпадающий список
        .select('Ford')  //выбрал опцию 
        .get('[name="ModelId"]')  //нашел элемент другой выпадающий список
        .select('Fiesta') // выбрал опцию
        .get('[data-ym-target="exp_find"]')
        .click()
})

it('scrollIntoView', () => {
    cy.visit('http://automationpractice.com/index.php')
        .get('[name="email"]')  //нашел элемент 
        .scrollIntoView()  //проскроллил до него
       
})

it('scrollTo', () => {
    cy.visit('http://automationpractice.com/index.php')
     
    cy.scrollTo(0, 500)  //проскроллил на 500 пикселей вниз 
       
})

it.only('scrollIntoView', () => {
    cy.visit('http://automationpractice.com/index.php')
        .get('.blockbestsellers').contains('Best Sellers')  //нашел элемент 
        .trigger('mouseover')  //навел курсор на эл-т, при заплнениии в кавычках предложены другие действия, которые возможно сделать
       
})