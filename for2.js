//For In ↓↓↓↓

const notas = [7.8, 5.3, 4.1, 9.8, 6.3]

for (let n in notas) {
    console.log(n, notas[n]) // Chamando o indíce e o valor
}

/*
For In irá retornar o INDÍCE em questão. 
Com a vírgula, pode-se inserir o valor, chamando o mesmo.
*/


//SEMPRE UTILIZAR LET/VAR/CONST PARA GARANTIR O ATRIBUTO DENTRO DO ESCOPO FOR.


const notas1 = [7.8, 5.3, 4.1, 9.8, 6.3]

for (let n1 in notas) {
    console.log(notas[n1]) // Chamando apenas os valores.
}

const notas2 = [7.8, 5.3, 4.1, 9.8, 6.3]

for (let n2 in notas) {
    console.log(n2) // Chamando apenas os indíces
}

//Testes ↓↓↓↓
const pessoa = {
    Nome: 'André',
    Sobrenome: 'Santos',
    idade: '23',
    peso: '86',
}

for (let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}               //   Indíce        // Valor Indíce

const pessoa2 = {
    Nome: 'Stela',
    Sobrenome: 'Terra',
    Idade: '23',
    Peso: '60'
}

for (let atributos2 in pessoa2) {
    console.log(`${atributos2} = ${pessoa2[atributos2]}`)
}
