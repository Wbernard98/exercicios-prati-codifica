// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite um número: '));
if(!isNaN(num1)&& Number.isInteger(num1)){// !isNaN = a função retorna true se o valor não for número e false se for um número. ! => inverte o resultado . Number.isInteger: este mmeétodo verifica se o valor da variavel numero é um numero inteiro e retorna true e false se for decimal .
    for(let i = 1; i <=10; i++){
        console.log(num1);
    }
}
