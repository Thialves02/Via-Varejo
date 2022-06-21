window.onload = initPage;

function initPage(){
    loadData()
}

var array = []

const AddTransaction = () => {
    const transacao = $("#transacao").val()
    const mercadoria = $("#mercadoria").val()
    const valor = $("#valor").val()

    const infoTransacao = {
        transacao,
        mercadoria,
        valor
    }

    if(localStorage.transacao){
        array = JSON.parse(localStorage.getItem('transacao'))
    }

    array.push(infoTransacao)

    localStorage.transacao = JSON.stringify(array)

    console.log(JSON.parse(localStorage.getItem('transacao')))
}

const loadData = () => {
    var total = 0
    console.log(JSON.parse(localStorage.getItem('transacao')))
    const localStorageInfo = JSON.parse(localStorage.getItem('transacao'))

    localStorageInfo.forEach( ({transacao,mercadoria,valor}) => {   
    const getSymbol = transacao == 'compra' ? '-' : '+'
    const converToNumber = parseInt(valor)
    
    $("#teste").append(getSymbol == '-' ? total-= converToNumber : total += converToNumber, mercadoria,`R$ ${formatValues(converToNumber)}`);
        console.log(formatValues(converToNumber))
    })
    $("#teste").append(`R$ ${total}`)
}

const formatValues = valor => (valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})