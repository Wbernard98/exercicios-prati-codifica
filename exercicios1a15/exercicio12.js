// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.
const prompt = require('prompt-sync')();   
let n2 = Number(prompt('Digite um número: '))
for ( let n1=1; n1<=10; n1++){
    console.log(`${n1} x ${n2} = ${n1*n2}`);
}

