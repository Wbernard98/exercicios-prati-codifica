// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
const prompt = require ('prompt-sync')();
let n;
let soma = 0;
let quantidade = 0;

console.log("Digite numeros decimais para calcular a média ( digite 0 para encerrar");

do{
    const input = prompt("Digite um numero: ");
    n = parseFloat(input);
    if(!isNaN(n)){
        if (n !== 0) { // Adicionada esta verificação
            soma += n;
            quantidade++;
        }
    } else{
        console.log("Entrada inválida. digite um numero decimal válido ou 0");
    }
} while(n !== 0);

if(quantidade > 0){
    const media = soma / quantidade;
    console.log(`a media aritimetica dos ${quantidade} numeros é: ${media.toFixed(2)}`);
} else{
    console.log("Nenhum numero válido foi digitado (além do 0).");
}