window.onload = initPage;
function initPage(){
    loadData()
}

var array = []

const AddTransaction = () => {
    const infoTransacao = {
        transacao:$("#transacao").val(),
        mercadoria:$("#mercadoria").val(),
        valor:$("#valor").val()
    }

    if(localStorage.transacao){
        array = JSON.parse(localStorage.getItem('transacao'))
    }

    array.push(infoTransacao)
    localStorage.transacao = JSON.stringify(array)

    loadData()
}

const loadData = () => {
    var total = 0
    $("#vazio").hide()
    $("#containerMercadoria p, #containerValor p, #valorTotal p, #lucroPrejuizo p").remove()
    
    const localStorageInfo = JSON.parse(localStorage.getItem('transacao'))
    localStorageInfo != null ?     
        localStorageInfo.forEach( ({transacao,mercadoria,valor}) => {   
            const getSymbol = transacao == 'compra' ? '-' : '+'
            const converToNumber = parseInt(valor)
            total = getSymbol == '-' ? total -= converToNumber : total += converToNumber

            $("#containerMercadoria").append(`<p>${getSymbol} ${mercadoria}</p>`);
            $("#containerValor").append(`<p>R$ ${formatValues(converToNumber)}</p>`);
        }) : $("#vazio").show();

    $("#valorTotal").append(`<p>Total</p> <p>R$ ${formatValues(total)}</p>`)
    $("#lucroPrejuizo").append(`${total > 0 ? "<p>[LUCRO]</p>" : "<p>[PREJUÍZO]</p>"} `)
}

const formatValues = valor => (valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})