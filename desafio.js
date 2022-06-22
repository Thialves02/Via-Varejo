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

    isValid(infoTransacao) == true ? (  
        array.push(infoTransacao), 
        localStorage.transacao = JSON.stringify(array), 
        loadData()
    ) : (
        alert('Informações Inválidas')
    )
}

const isValid = ({transacao,mercadoria,valor}) => ( transacao == '' || mercadoria == '' || valor == '' || valor < 1 ) ? false : true

const loadData = () => {
    var total = 0
    $("#semTransacao").hide()
    $("#transacoes p, #valorTotal p, #lucroPrejuizo p").remove()
    
    const localStorageInfo = JSON.parse(localStorage.getItem('transacao'))
    localStorageInfo != null ?     
        localStorageInfo.forEach( ({transacao,mercadoria,valor}) => {   
            const getSymbol = transacao == 'compra' ? '-' : '+'
            const converToNumber = parseInt(valor)
            total = getSymbol == '-' ? total -= converToNumber : total += converToNumber

            $("#transacoes").append(`<div class="transacao"><p>${getSymbol} ${mercadoria}</p><p>R$ ${formatValuesToBRL(converToNumber)}</p></div>`);
        }) : $("#semTransacao").show();

    $("#valorTotal").append(`<p>Total</p> <p>R$ ${formatValuesToBRL(total)}</p>`)
    $("#lucroPrejuizo").append(`${total > 0 ? "<p>[LUCRO]</p>" : "<p>[PREJUÍZO]</p>"} `)
}

const formatValuesToBRL = valor => (valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})