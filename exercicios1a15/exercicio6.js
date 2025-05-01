// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)



let a = Number(prompt("Digite o lado A:")) 
let b = Number(prompt("Digite o lado B:"))
let c = Number(prompt("Digite o lado C:"))
if(a<b+c && b<a+c && c<a+b){
    console.log("É um triângulo")
    if(a==b && b==c){
        console.log("Triângulo eqüilátero")
    }else if(a==b || a==c || b==c){
        console.log("Triângulo isósceles")
    }else{
        console.log("Triângulo escaleno")
    }
}else{
    console.log("Não é um triângulo")
}

