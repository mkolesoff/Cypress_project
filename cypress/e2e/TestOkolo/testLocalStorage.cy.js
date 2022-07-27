
import { authUser } from "../../support/pages/authPages"
 before(() => {
    authUser.SuccessAuthUser('9536462566');
    cy.saveLocalStorage();
      });

  it('proverka lockal storag', () => {
    cy.visit('https://dev-crm.okolo.app/documents')
  }  )


  it('proverka lockal storag', () => {
    cy.restoreLocalStorage();
    cy.visit('https://dev-crm.okolo.app/documents?tab=%D0%90%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B8%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BE%D1%82%D1%87%D0%B5%D1%82%D1%8B')
        .wait(5000)
}  )

  it('proverka lockal storag', () => {
    cy.restoreLocalStorage()
    cy.visit('https://dev-crm.okolo.app/network-orders')
            .wait(5000)
  }  )