/// <reference types="Cypress" /> 

import { authUser } from "../../support/pages/authPages"
import { menuPages } from "../../support/pages/menuPages"
import 'cypress-file-upload' 


it.only('Send banner', ()=>{
    const nameBanner = 'Лучшие предложения'
    cy.viewport(2000, 1000)
    authUser.SuccessAuthUser('9852840504')
    cy.wait(3000)
    cy.reload()
    menuPages.openMenu()
    cy.get('.menu__tabs').contains('Баннеры').click()
       .get('[data-cy="create-banner-button"]').click()
       .get('[data-cy="create-banner-name-input"]').find('[data-cy="input"]').click().type(nameBanner)
       .get('.m-b-32.align-items-end > .single-select > .popper > .popper__activator > [data-cy="select-label"]').click()
       .get('.select__options-list').eq(1).contains('Главная ОКОЛО').click()
       .get('[vid="tapAction"]').find('[class="popper"]').click()
       .get('[data-cy="select-option"]').contains('Скопировать промокод').click()
       .get('[name="промокод"]').find('[class="field__input-wrapper"]').type('1111')
       .get('[placeholder="Укажите срок"]').eq(1).click()
       .get('[class="cell"]').eq(0).click()
       .get('[class="cell"]').eq(2).click()
 
       .get('[placeholder="Укажите время"]').eq(1).click()
       //.get('.mx-datepicker-content').find('.mx-scrollbar-wrap').eq(6).contains('00').click()  
       //.get('.mx-datepicker-content').find('.mx-scrollbar-wrap').eq(9).contains('02').click()   доделать выбор времени работает некорректно
       .get('[data-cy="tab-first"]').click()
       .get('[data-cy="create-banner-type-select"]').find('[class="popper"]').click()
       .get('[data-cy="select-option"]').contains('Всем').click()
       .get('[data-cy="create-banner-image-container"]').attachFile('banner.jpg' ) 
       
       .wait(10000)
       .get('[data-cy="create-banner-inner-button"]').click()

      // .get('input[placeholder="Название, промокод"]').type(nameBanner) Бонус активация баннера
       //.get('[data-cy="banner-item-name"]').contains(nameBanner).click()
       //.get('button[data-cy="banner-status-button"]').click()
       
 
 })
 