const prompt = require('prompt-sync')()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
 let valor1 = Number(prompt("digite um número:"))
 if(valor1%2==0){
    console.log("par")
 }else{
    console.log("impar")
 }
