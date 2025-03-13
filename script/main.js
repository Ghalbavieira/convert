// pegar o valor do input
let amount = document.getElementById('amount');
let form = document.querySelector("form")
let footer = document.querySelector("main footer")
let description = document.getElementById("description")
let result = document.getElementById("result")
let USD = 5.85;
let EUR = 6.45;
let GBP = 7.45;

// e observar o evento do input para manipular o que será recebido
amount.addEventListener('input', () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, '')

})

// capturando o evento do submit (enviar) do formulario

form.onsubmit = (event) => {
    event.preventDefault();
    let currency = document.getElementById("currency")

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, 'US$')
        break;
        case "EUR":
            convertCurrency(amount.value, EUR, '€')
        break;
        case "GBP":
            convertCurrency(amount.value, GBP, '£')
        break;
    }
}


// função para converter a moeda

function convertCurrency(amount, price, symbol) {
    try{
        description.textContent = `${symbol} 1 = ${price}`
        let convertAmount = amount * price 
        result.textContent = `R$ ${convertAmount.toFixed(2)} reais`;
        footer.classList.add('show-result');

    }catch(error){
        console.log(error)
        footer.classList.remove('show-result')
        alert('Não foi possivel converter. Tente novamente')
    }
    
}