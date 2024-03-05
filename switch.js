const imprimirResultado = function (nota) {
    if (isNaN(nota) || nota < 0) { // Utilizei IsNaN e nota < 0 para aceitar apenas tipo NUMBER e maiores que 0
        console.log('Por favor, insira um número válido!')
        return;
    }
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação.')
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida.')
    }

}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(7)
imprimirResultado('erro')

// Testes ↓↓↓↓

const mesesAno = function (mes) {
    switch ((mes)) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Insira um mês valido.')
    }
}

mesesAno(6)
mesesAno(9)
mesesAno(2)