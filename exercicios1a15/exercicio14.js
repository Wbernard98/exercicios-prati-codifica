// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
const prompt = require ('prompt-sync')();

let numero = Number(prompt('Digite um número: '));

if( numero<0){
    console.log("Por favor, digite um número inteiro e não negativo")
    return;
}
if(numero ===0 || numero ===1){
    console.log(`o fatorial de ${numero} é 1`)
    return;
}
let fatorial = 1
for(let i=2; i<=numero; i++){
    fatorial *=i;
}
console.log(`o fatorial de ${numero} é ${fatorial}`)
