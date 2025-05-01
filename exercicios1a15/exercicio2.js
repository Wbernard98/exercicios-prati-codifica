// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.


let idade = Number(prompt('Digite sua idade: '))
if(idade <= 17){
    console.log('Você é adolescente')
}else if(idade <= 59){
    console.log('Você é adulto')
}else{
    console.log('Você é idoso')
}




