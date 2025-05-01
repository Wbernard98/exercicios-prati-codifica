// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.



let valor1 = Number(prompt("Digite a quantidade de maças que comprou? "));
if(valor1<=12){
    valor1= valor1*0.30    
}else{
    valor1= valor1*0.25
}
console.log("valor comprado em maças foi", valor1)