/// <reference types="Cypress" /> 

import { authUser } from "../../support/pages/authPages"
import { menuPages } from "../../support/pages/menuPages"
import 'cypress-file-upload' 

   
it('Send push to one device', ()=>{
   authUser.SuccessAuthUser('9852840504')
   cy.wait(3000)
   cy.reload()
   menuPages.openMenu()
   cy.get('.menu__tabs').contains('Пуши').click()
      .get('input[placeholder="Не более 37 символов с пробелами"]').type('Добрый день!')
      .get('[data-cy="textarea-field"]').type('Лучшие предложения и скидки у нас')
      .get('[data-cy="select-label"]').click()
      .get('.list-suggest-item').contains('Указанный user id').click()
      .get('input[placeholder="Введите user id"]').type('610babea5534762f61c77b57')
      .get('input[placeholder="Ссылка для пуш-уведомления"]').type('https://5ka.ru/')
      .get('.checkbox__icon').eq(0).click()
      .get('button[data-cy="send-push-button"]').click()


      .get('[data-cy="notify-success"]').should('be.visible').and('have.text', 'Рассылка создана и отправлена')

})

it.only('Send push to multiple devices', ()=>{
   authUser.SuccessAuthUser('9852840504')
   cy.wait(3000)
   cy.reload()
   menuPages.openMenu()
   cy.get('.menu__tabs').contains('Пуши').click()
      .get('input[placeholder="Не более 37 символов с пробелами"]').type('Добрый день!')
      .get('[data-cy="textarea-field"]').type('Лучшие предложения и скидки у нас')
      .get('[data-cy="select-label"]').click()
      .get('.list-suggest-item').contains('Загрузить список user id').click()
      .get('[data-cy="load-csv"]').attachFile('push.csv')  // чтобы загрузить пришлось установить cypress-file-upload https://www.npmjs.com/package/cypress-file-upload
      .get('input[placeholder="Ссылка для пуш-уведомления"]').type('https://5ka.ru/')
      .get('.checkbox__icon').eq(0).click()
      .get('button[data-cy="send-push-button"]').click()


      .get('[data-cy="notify-success"]').should('be.visible').and('have.text', 'Рассылка создана и отправлена')

})

