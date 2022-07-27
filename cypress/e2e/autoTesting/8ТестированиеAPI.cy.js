it("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua") // Работа get запроса, запрос реализуется с помощью ф-ии request
    .then((response) => {
      // вызываем ф-ю then которая работает с промисами, в ней указываем респонз, он является ответом, далее делаем консоль лог и выводим промес
      console.log(response);
    });
});

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
    headers: headersData,
  }) // заполнили данные в запрос (взяли из консоли добавили в константы, а константы добавили в request)
    .then((response) => {
      // вызываем ф-ю then которая работает с промисами, в ней указываем респонз, он является ответом, далее делаем консоль лог и выводим промес (можно присвоить его или сравнить подозреваю)
      console.log(response.body);
    });
});
