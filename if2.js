function teste1(num) {
    if (num > 6) {
        console.log(num)
        console.log('Final')
    }
}

teste1(1)
teste1(8)

/*
Verifica-se que, quando o bloco está entre chaves, 
o código só rodará quando todas as sentenças forem verdadeiras.
--> No teste 1, rodou apenas com o numeral 8

Retorno:
8
Final
*/


function teste2(num) {
    if (num > 6)
        console.log(num)
    // ↓↓↓ Sem relação com o código acima.
    console.log('Final')
}

teste2(1)
teste2(8)


/*
--> No teste 2, rodou o num (Menor que 6) e não retornou o mesmo.
Rodou o primeiro 'Final', juntamente com o numeral da linha de cima, 
por estarem separados (A chaves realiza o aglomerado)
Retorno:
Final -> Retorno do primeiro numeral inserido
8
Final
*/

// SEMPRE USAR CHAVES, PARA NÃO OCORRER TAL FATO SEM CONSCIÊNCIA

function teste3(num) {
    if (num > 6); { //Ponto e virgula bloqueando o código abaixo.
        console.log(num)
    }
}

teste3(1)
teste3(8)

/*
Validar sempre a questão do PONTO E VIRGULA ';'
O mesmo será visto, dentro de uma estrutura de controle, como uma sentença de Código.
NÃO USAR EM ESTRUTURAS DE CONTROLE.
*/