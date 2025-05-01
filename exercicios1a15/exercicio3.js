// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


let n1 = Number(prompt("Digite uma nota:"))

if(n1>=7){
    console.log("Aprovado")
}else if(n1>=5 && n1<7){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}