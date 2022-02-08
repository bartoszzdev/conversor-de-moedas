const elementoValorConvertido = document.querySelector('#result')
const valorCotacaoDolar = 5.26  //Aqui recebe a cotação do dolar diaria

function converter() {
    const valorElemento = document.getElementById('valor')
    const valorEmReal = parseFloat(valorElemento.value)

    const valorEmDolar = valorEmReal / valorCotacaoDolar
    const valorConvertidoDolar = valorEmDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    const valorResultado = `O valor em dólar é ${valorConvertidoDolar}`

    valorElemento.value === "" ? (
        elementoValorConvertido.innerHTML = "Insira um número válido!"
    ) : (
        elementoValorConvertido.innerHTML = valorResultado
    )

    elementoValorConvertido.style.opacity = 1;
}

function verificarCotacao() {
    const valorCotacao = `1 Dólar igual a ${valorCotacaoDolar} real brasileiro`          
    elementoValorConvertido.innerHTML = valorCotacao
    elementoValorConvertido.style.opacity = 1;
}