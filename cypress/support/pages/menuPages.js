export class MenuPages {
    openMenu(){
        cy.get('[data-cy="open-left-menu-btn"]').click()
            .get('[data-cy="administration"]').click()
    }

}

export const menuPages = new MenuPages()