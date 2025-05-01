// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
const prompt = require('prompt-sync')();

let primeiroNumb = 0
let segundoNumb = 1
let proximoNumb

console.log(primeiroNumb)
console.log(segundoNumb)

for(let i =2; i<10; i++){//'for' vai gerar os 8 números restantes (para totalizar 10).
    proximoNumb = primeiroNumb + segundoNumb
    console.log(proximoNumb)// imprime o número recem calculado
    // // O 'segundoNumero' atual se torna o novo 'primeiroNumero'.
    primeiroNumb = segundoNumb
 //   'proximoNumero' que acabamos de calcular se torna o novo 'segundoNumero'.
    segundoNumb = proximoNumb
}
