// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()

let opcao

do{
    console.log("Escolha")
    console.log("item 1")
    console.log("item 2")
    console.log("item 3")
    console.log("0. sair")
opcao= prompt("escolha uma opção:")
opcao= parseInt(opcao)
switch(opcao){
    case 1:
        console.log("item 1 selecionado")
        break
    case 2:
        console.log("item 2 selecionadoo")
        break
    case 3:
        console.log("item 3 selecionado")
        break
    case 0:
        console.log("saindo")
        break
    default:
        console.log("opção inválida")
        break
}
    
}while(opcao!==0)