//Проверка через экспект expect
it("Example sending the POST request", () => {
  const requestBody = {
    action: "info",
    phone: "+380686979712",
    amount: 50,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0526",
    xref: "70c0365c7024ee2bf3381c1ec7a6ee54",
    _: 1658248434564,
  };
  const headersData = {
    cookie:
      "_ga=GA1.2.1471978148.1657724326; pubkey=3cc6dbd82ce27c430adc5fc88ee47632; _gid=GA1.2.2074626317.1658247291; lfp=7/13/2022, 5:59:01 PM; pa=1658247300241.55830.07272388039573974next.privat24.ua0.9426767142157182+1; fp=11",
  };
  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headersData,
  }) // заполнили данные в запрос (взяли из консоли добавили в константы, а константы добавили в request)g
    .then((response) => {
        expect(response).to.have.property('status').to.equal(200)  //проверка что в ответе статус 200
        expect(response.body).to.have.property('status').to.equal('success')
        expect(response.body.data).to.have.property('amount').to.equal('50.0') //передвигаемся по вложенности
        // expect(response.body.data[i]).to.have.property('amount').to.equal('50.0') если data массив, то можно либо указать номер элемента в массиве, либо написать цикл и пробегаться по каждому эл-ту в цикле
        console.log(response);
    });
});

 // проверка через шуд
it.only("Example sending the POST request", () => {
    const requestBody = {"action":"info","phone":"+380686979712","amount":50,"currency":"UAH","cardCvv":"111","card":"4552331448138217","cardExp":"0526","xref":"70c0365c7024ee2bf3381c1ec7a6ee54","_":1658248434564};
    const headersData = {
      cookie:
        "_ga=GA1.2.1471978148.1657724326; pubkey=3cc6dbd82ce27c430adc5fc88ee47632; _gid=GA1.2.2074626317.1658247291; lfp=7/13/2022, 5:59:01 PM; pa=1658247300241.55830.07272388039573974next.privat24.ua0.9426767142157182+1; fp=11",
    };
    cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headersData,    //функция содержит в себе ответ который пришел, данный ответ можно использовать с помощью its
    }).its('body').should('contain', {  //респонс должен содержать бади, который должен содержать в себе определенный объект(например статус саксесс)
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })                // чтобы углубиться дальше в объект (например в дата) и проверить в нем объект
  });
  