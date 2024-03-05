const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado(5)
imprimirResultado(10)
imprimirResultado(-1)
imprimirResultado('Epa!') // Atenção a STRING. Não retorna ERRO.

// Teste sem declarar como CONST, não houve diferença no código.

function imprimirResultado1(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado1(5)
imprimirResultado1(10)
imprimirResultado1(-1)
imprimirResultado1('Epa!') // Atenção a STRING. Não retorna ERRO.

// Teste para resolver o problema de STRING ↓↓↓↓

function imprimirResultado2(nota) {
    if (isNaN(nota)) {
        console.log('Por favor, insira um número!')
        return;
    }
    if (nota >= 7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }

}

imprimirResultado2(9)
imprimirResultado2(10)
imprimirResultado2(-1)
imprimirResultado2('Epa!')


// Resolvendo o problema para números NEGATIVOS ↓↓↓↓

function imprimirResultado3(nota) {
    if (isNaN(nota) || nota < 0) {
        console.log('Por favor, insira um número!')
        return;
    }
    if (nota >= 7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }

}

imprimirResultado3(9)
imprimirResultado3(10)
imprimirResultado3(-1)
imprimirResultado3('Epa!')

/*
Tratei de utilizar o IsNaN para barrar qualquer TIPO que não seja NUMBER.
Utilizei nota < 0 para barrar números negativos.
*/