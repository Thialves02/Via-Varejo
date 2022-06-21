/* ================================================================================================= */
/* ================================================================================================= */
/* ================================================================================================= */


//ESTUDOS SOBRE FOREACH
//Método mais elegante e funcional
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

//Aceita função como parametro e não é necessario ()
socialNetworks.forEach(logArrayInfo)


/* ================================================================================================= */
/* ================================================================================================= */
/* ================================================================================================= */


//VERIFICAÇÃO DE PARAMETROS DE UMA FUNÇÃO
//Arrow function onde color é o parametro da função
const convertToHex = color => {
    const colors = {
        red: '#A31419',
        green: '#10A337',
        blue: '#4C61F0',
        yellow: 'F0EA6F',
        purple: '#8132A3'
    }
    //If para caso retornar um valor de acordo com os parametros passados
    return colors[color] ?
        `O hexadecimal para a cor ${color} é ${colors[color]}` :
        `Não temos o equivalente hexadecimal para ${color}`
}

console.log(convertToHex('red'))

const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'black',
    'brown',
    'pink'
]

//forEach recebe uma função que tem como parametro color
const logColorMessage = color => console.log(convertToHex(color))
colors.forEach(logColorMessage)


/* ================================================================================================= */
/* ================================================================================================= */
/* ================================================================================================= */

//DESESTRUTURAÇÃO DE UM OBJETO

const getFullName = (user) => {
    const firstName = user.firstName
    const lastName = user.lastName

    return `${firstName} ${lastName}`
}

//Jeito correto
const getFullNameCorrect = ({firstName,lastName}) => `${firstName} ${lastName}`

console.log(getFullNameCorrect({firstName:'Thiago',lastName:'Roberto'}))

/* ================================================================================================= */
/* ================================================================================================= */
/* ================================================================================================= */

//DIMINUIR IFS
/* A função recebe o parametro e verifica se o erro existe dentro do objeto, caso exista o [errorType] retorna 
   a mensagem de erro correspondente, senão a mensagem depois de || é exibida */

const getErrorMessage = errorType => ({
    'erro1':'erro1',
    'erro2':'erro2',
    'erro3':'erro3',
    'erro4':'erro4',
})[errorType] || 'Não foi possível obter informações'

console.log(getErrorMessage('error1'))
console.log(getErrorMessage('oi'))