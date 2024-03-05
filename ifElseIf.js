Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

/*
Atualizando o código com melhoria.
Testado uma string e retornou o erro do VS. Para isso, utilizei novamente o isNan.
O problema foi corrigido e retornará a mensagem de erro, caso o usuário informe TIPO diferente de number.
*/
const imprimirResultado = function (nota) {
    if (isNaN(nota)){
        console.log('Por favor, insira um número.')
        return
    }
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    }
    else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    }
    else if (nota.entre(4, 6.99)) {
        console.log('Recuperação.')
    }
    else if (nota.entre(0, 3.99)) {
        console.log('Reprovado.')
    }
    else {
        console.log('Nota Inválida!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(7)
imprimirResultado(4.5)
imprimirResultado(3.2)
imprimirResultado(-1)
imprimirResultado('Taksjfa')
imprimirResultado(undefined)

/* 
A utilização de if -- else if será realizada para cada bloco, caso o último não seja TRUE
Nesses casos, caso a sentença atual retorne FALSE, ela irá para a sentença abaixo.
*/