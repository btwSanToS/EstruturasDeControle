const getInteiroAleatorioEntre = function (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//console.log(getInteiroAleatorioEntre(45, 70))

//While

let opcao = 0
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}
console.log('Até a próxima!')

//Testes ↓↓↓

const getNumeroAleatorio = function () {
    return Math.floor(Math.random() * 20) + 1;
}

let numeroEscolhido = 0;
while (numeroEscolhido !== 15) {
    numeroEscolhido = getNumeroAleatorio();
    console.log(`Número escolhido foi ${numeroEscolhido}`);
}

console.log('Encontrou o número 15. Até a próxima!');
