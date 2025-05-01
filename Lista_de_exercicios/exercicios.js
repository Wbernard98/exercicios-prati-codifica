 const prompt = require('prompt-sync')()

// // 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// // utilizando uma estrutura de controle if.
//  let valor1 = Number(prompt("digite um número:"))
//  if(valor1%2==0){
//     console.log("par")
//  }else{
//     console.log("impar")
//  }

// // 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// //     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// //     controle if-else.


// let idade = Number(prompt('Digite sua idade: '))
// if(idade <= 17){
//     console.log('Você é adolescente')
// }else if(idade <= 59){
//     console.log('Você é adulto')
// }else{
//     console.log('Você é idoso')
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


// let n1 = Number(prompt("Digite uma nota:"))

// if(n1>=7){
//     console.log("Aprovado")
// }else if(n1>=5 && n1<7){
//     console.log("Recuperação")
// }else{
//     console.log("Reprovado")
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let opcao

// do{
//     console.log("Escolha")
//     console.log("item 1")
//     console.log("item 2")
//     console.log("item 3")
//     console.log("0. sair")
// opcao= prompt("escolha uma opção:")
// opcao= parseInt(opcao)
// switch(opcao){
//     case 1:
//         console.log("item 1 selecionado")
//         break
//     case 2:
//         console.log("item 2 selecionadoo")
//         break
//     case 3:
//         console.log("item 3 selecionado")
//         break
//     case 0:
//         console.log("saindo")
//         break
//     default:
//         console.log("opção inválida")
//         break
// }
    
// }while(opcao!==0)

// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let peso = Number(prompt("Digite a sua massa corporal:"))
// let altura = Number(prompt("Digite a sua altura:"))
// let imc = peso / (altura * altura)

// if(imc<=18.5){
//     console.log("Abaixo do peso")
// }else if(imc>=18.5 && imc <=24.9){
//     console.log("Peso normal")
// }else if(imc>=25 && imc <=29.9){
//     console.log("Sobrepeso")
// }else{
//     console.log("Obesidade")
// }
// console.log(imc)

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)



// let a = Number(prompt("Digite o lado A:")) 
// let b = Number(prompt("Digite o lado B:"))
// let c = Number(prompt("Digite o lado C:"))
// if(a<b+c && b<a+c && c<a+b){
//     console.log("É um triângulo")
//     if(a==b && b==c){
//         console.log("Triângulo eqüilátero")
//     }else if(a==b || a==c || b==c){
//         console.log("Triângulo isósceles")
//     }else{
//         console.log("Triângulo escaleno")
//     }
// }else{
//     console.log("Não é um triângulo")
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// let valor1 = Number(prompt("Digite a quantidade de maças que comprou? "));
// if(valor1<=12){
//     valor1= valor1*0.30    
// }else{
//     valor1= valor1*0.25
// }
// console.log("valor comprado em maças foi", valor1)

// 8.Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


// let n1 = Number(prompt('Digite o primeiro número: '));
// let n2 = Number(prompt('Digite o segundo número: '));
// if(n1===n2){
//     console.log('Os números são iguais');
// }else if(n1>n2){
//     console.log("numero 1:", n1, "numero 2:", n2);

// }else{
//     console.log("numero 1:", n2, "numero 2:", n1);
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.


// let i = 0;
// for(i=10; i>=1; i--){
//     console.log(i);
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.


// let num1 = Number(prompt('Digite um número: '));
// if(!isNaN(num1)&& Number.isInteger(num1)){// !isNaN = a função retorna true se o valor não for número e false se for um número. ! => inverte o resultado . Number.isInteger: este mmeétodo verifica se o valor da variavel numero é um numero inteiro e retorna true e false se for decimal .
//     for(let i = 1; i <=10; i++){
//         console.log(num1);
//     }
// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.


// let soma = 0

// for(let valor1=0; valor1<5; valor1++){
//   const num = parseFloat(prompt(`digite o  ${valor1 + 1} número:`)) 
//   if(!isNaN(num)){
//     soma+=num;
//   }
  
// }
// console.log(`a soma total dos números digitados é : ${soma}`)


// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.
  
// let n2 = Number(prompt('Digite um número: '))
// for ( let n1=1; n1<=10; n1++){
//     console.log(`${n1} x ${n2} = ${n1*n2}`);
// }

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// let n;
// let soma = 0;
// let quantidade = 0;

// console.log("Digite numeros decimais para calcular a média ( digite 0 para encerrar");

// do{
//     const input = prompt("Digite um numero: ");
//     n = parseFloat(input);
//     if(!isNaN(n)){
//         if (n !== 0) { // Adicionada esta verificação
//             soma += n;
//             quantidade++;
//         }
//     } else{
//         console.log("Entrada inválida. digite um numero decimal válido ou 0");
//     }
// } while(n !== 0);

// if(quantidade > 0){
//     const media = soma / quantidade;
//     console.log(`a media aritimetica dos ${quantidade} numeros é: ${media.toFixed(2)}`);
// } else{
//     console.log("Nenhum numero válido foi digitado (além do 0).");
// }

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let numero = Number(prompt('Digite um número: '));

// if( numero<0){
//     console.log("Por favor, digite um número inteiro e não negativo")
//     return;
// }
// if(numero ===0 || numero ===1){
//     console.log(`o fatorial de ${numero} é 1`)
//     return;
// }
// let fatorial = 1
// for(let i=2; i<=numero; i++){
//     fatorial *=i;
// }
// console.log(`o fatorial de ${numero} é ${fatorial}`)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// let primeiroNumb = 0
// let segundoNumb = 1
// let proximoNumb

// console.log(primeiroNumb)
// console.log(segundoNumb)

// for(let i =2; i<10; i++){//'for' vai gerar os 8 números restantes (para totalizar 10).
//     proximoNumb = primeiroNumb + segundoNumb
//     console.log(proximoNumb)// imprime o número recem calculado
//     // // O 'segundoNumero' atual se torna o novo 'primeiroNumero'.
//     primeiroNumb = segundoNumb
//  //   'proximoNumero' que acabamos de calcular se torna o novo 'segundoNumero'.
//     segundoNumb = proximoNumb
// }
