// 8.Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


let n1 = Number(prompt('Digite o primeiro número: '));
let n2 = Number(prompt('Digite o segundo número: '));
if(n1===n2){
    console.log('Os números são iguais');
}else if(n1>n2){
    console.log("numero 1:", n1, "numero 2:", n2);

}else{
    console.log("numero 1:", n2, "numero 2:", n1);
}

