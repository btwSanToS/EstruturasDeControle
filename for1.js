let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [7.9, 5.7, 9.4, 6.2]
for (let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}

// Testes ↓↓↓↓

const pessoas = ['André', 'Rodrigo', 'Enzo', 'Erick', 'Clóvis']
for (let p = 0; p < pessoas.length; p++) {
    console.log(`As pessoas inseridas são: ${pessoas[p]}`)
}


const frutas = ['abacaxi', 'manga', 'kiwi', 'pêssego'];
for (let f = 0; f < frutas.length; f++) {
    console.log(`Fruta = ${frutas[f]}`);
}

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maior', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
for (let m = 1; m < meses.length; m++) {
    console.log(`Os meses do ano são: ${meses[m]}`)
}