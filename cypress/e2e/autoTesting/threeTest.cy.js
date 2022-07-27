// contains поиск по содержимому (по принциру поиска первого элемента)
// если contains находится в каком-то элементе у которго родитель input, button, a, label  то contains найдет именно родителя
it('contains', () => {
    cy.viewport(1800, 800) //открыть в разрешении
    cy.visit('https://kostroma.cian.ru/')
    cy.contains('+ Разместить объявление')  // нашел в родительском а


}
)

it('contains2', () => {
    cy.visit("https://kostroma.cian.ru/")
    cy.contains('span', '+ Разместить объявление') //поиск непосредственно в том теге в котором содержится элемент, тег в начале span


}

)
it.only('contains3', () => {
    cy.visit('https://kostroma.cian.ru/"')
    cy.contains('+ разместить объявление', {matchCase: false} )  //игнорирование регистра (если true или нет, то регистр будет сравниваться)
})

