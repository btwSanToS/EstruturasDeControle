/* Tradução de If = Se.
If será exucutado quando o retorno for TRUE.
*/
function apenasBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

apenasBoaNoticia(8)
apenasBoaNoticia(5) // Nesse caso, não retornou dado. False.

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

// No caso acima, irá retornar apenas VALORES verdadeiros. 
seForVerdadeEuFalo(1)
seForVerdadeEuFalo('1')
seForVerdadeEuFalo(null) // Sempre False.
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('-1')
seForVerdadeEuFalo('0') // -> String 0 = True
seForVerdadeEuFalo(0) // Número 0 sempre False