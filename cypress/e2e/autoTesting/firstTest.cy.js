it("By ID", () => {
    cy.visit("https://www.drive2.ru/reception/")
    cy.get("#login")
}

)

it("By Class", () => {
    cy.visit("https://www.drive2.ru")
    cy.get(".x-search__input")
}

)
it("By Tag", () => {
    cy.visit("https://onecompiler.com/")
    cy.get("textarea")
}

)
// По значению атрибута 
it("By Tag value", () => {
    cy.visit("https://www.drive2.ru/reception/")
    cy.get('[name="Password"]')
}

)
// по нескольким значениям атрибутов
it("By Diffent Tag", () => {
    cy.visit("https://www.drive2.ru/reception/")
    cy.get('[class="c-button"],[href="/recovery/"]')
}

)
// комбинированный поиск (по тегу и атрибуту)
it("By Diffent Types", () => {
    cy.visit("https://www.drive2.ru/reception/")
    cy.get('button[data-ym-target="login_from_reception_by_google"]')
}

)
// комбинированный поиск (по содержимому класса ) '*' говорит о том, что ищем любой селектор у которого класс начинается с c-logo
it.only("By Contains name", () => {
    cy.visit("https://www.drive2.ru/reception/")
    cy.get('*[class^="c-logo"]')
}

)