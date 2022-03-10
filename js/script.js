const elementoValorConvertido = document.querySelector('#result')

//Aqui recebe a cotação diaria de cada moeda (cotation)
const valorCotacao = [
    {
        cotation: 5.06,
        type: 'Dólar americano',
        locale: 'en-US',
        currency: {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2 
        },
        img: 'https://growidely.com.br/wp-content/uploads/2020/12/flag-round-250.png'
    },
    {
        cotation: 3.96,
        type: 'Dólar canadense',
        locale: 'en-CA',
        currency: {
            style: 'currency',
            currency: 'CAD',
            maximumFractionDigits: 2 
        },
        img: 'https://www.traveloffpath.com/wp-content/uploads/2019/03/canada-flag-circle-300x300.png.webp'
    },
    {
        cotation: 3.72,
        type: 'Dólar australiano',
        locale: 'en-AU',
        currency: {
            style: 'currency',
            currency: 'AUD',
            maximumFractionDigits: 2 
        },
        img: 'https://www.steakstones.com/wp-content/uploads/2016/11/aus-flag.png'
    },
    {
        cotation: 5.60,
        type: 'Euro',
        locale: 'en-GB',
        currency: {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 2 
        },
        img: 'https://cdn-icons-png.flaticon.com/512/323/323344.png'
    },
    {
        cotation: 6.67,
        type: 'Libra esterlina',
        locale: 'en-GB',
        currency: {
            style: 'currency',
            currency: 'GBP',
            maximumFractionDigits: 2 
        },
        img: 'https://bullgain.com/assets/icons/usa-icon.png'
    },
    {
        cotation: 0.24,
        type: 'Peso mexicano',
        locale: 'es-MX',
        currency: {
            style: 'currency',
            currency: 'MXN',
            maximumFractionDigits: 2 
        },
        img: 'https://boataxa.com.br/Images/img-peso-mexicano-rounded.png'
    },
    {
        cotation: 0.00413,
        type: 'Won sul-coreano',
        locale: 'ko-KR',
        currency: {
            style: 'currency',
            currency: 'KRW',
            maximumFractionDigits: 2
        },
        img: 'https://macmagazine.com.br/wp-content/uploads/2012/03/7-bandeira-coreia-do-sul.png'
    },
    {
        cotation: 0.0436,
        type: 'Iene japonês',
        locale: 'ja-JP',
        currency: {
            style: 'currency',
            currency: 'JPY',
            maximumFractionDigits: 2
        },
        img: 'https://www.bigcheesebadges.co.uk/images/japan_japanese_flag.png'
    },
    {
        cotation: 210032.88,
        type: 'Bitcoin',
        locale: 'en-GB',
        currency: {
            style: 'currency',
            currency: 'BTC',
            maximumFractionDigits: 5
        },
        img: 'https://bitcoinangola.net/wp-content/uploads/2021/07/opengraph.png'
    }
]

function converter() {
    const valorElemento = document.getElementById('valor')
    const valorEmReal = parseFloat(valorElemento.value)
    elementoValorConvertido.innerHTML = ''

    let valorConvertido

    for (let i = 0; i < valorCotacao.length; i++) {
        const valor = valorEmReal / valorCotacao[i].cotation

        valorConvertido = valor.toLocaleString(valorCotacao[i].locale, valorCotacao[i].currency).replace('BTC', '₿')

        valorElemento.value === "" ? (
            elementoValorConvertido.innerHTML = "Insira um número válido!"
        ) : (
            elementoValorConvertido.innerHTML += `
                <div class='item-result'>
                    <img src=${valorCotacao[i].img}>

                    <div>
                    <p>${valorConvertido}</p>
                    <p>${valorCotacao[i].type}</p>
                    </div>
                </div>
            `
        )
    
        elementoValorConvertido.style.opacity = 1;
    }
}

function verificarCotacao() {
    elementoValorConvertido.innerHTML = ''

    for (let i = 0; i < valorCotacao.length; i++) {
        elementoValorConvertido.innerHTML += `
                    <div class='item-result'>
                        <img src=${valorCotacao[i].img}>

                        <div>
                            <p>${valorCotacao[i].type}: </p>
                            <p>${(valorCotacao[i].cotation).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 4 })}</p>
                        </div>
                    </div>
                `
    }

    elementoValorConvertido.style.opacity = 1;
}