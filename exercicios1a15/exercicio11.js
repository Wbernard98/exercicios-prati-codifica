// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();   
let soma = 0

for(let valor1=0; valor1<5; valor1++){
  const num = parseFloat(prompt(`digite o  ${valor1 + 1} número:`)) 
  if(!isNaN(num)){
    soma+=num;
  }
  
}
console.log(`a soma total dos números digitados é : ${soma}`)