const convertButton = document.querySelector(".convert-button") // Mapeamento do Button (Dom)
const currencySelect = document.querySelector(".currency-select")
function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value  // Mapeando o valor digitado no input Valor
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moeadas

    const dolarToday = 4.90
    const euroToday = 5.36




    if (currencySelect.value == "dolar") {  
// Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
// Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)

    }

    // new intl.NumberFormat  ->  Ferramenta usada para formatação da moedas

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)


    currencyValueConverted.innerHTML =  new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(convertedValue)



}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".curency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
        
    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
        
    }

   convertValues()

}


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues) //   Ovinte de Evento


