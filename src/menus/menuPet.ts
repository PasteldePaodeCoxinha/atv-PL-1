import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

export default function menuPet(empresa: Empresa) {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let execucaoPet = true
    const funcoes = [
        function parar(empresa: Empresa) {
            execucaoPet = false
        },
        function cadastrarPet(empresa: Empresa) {
            console.log(`NADA`);
        },
        function listarTodosPets(empresa: Empresa) {
            console.log(`NADA`);
        },
        function pegarUmPet(empresa:Empresa){
            console.log(`NADA`);
        },
        function atualizarUmPet(empresa:Empresa){
            console.log(`NADA`);
        },
        function deletarUmPet(empresa:Empresa){
            console.log(`NADA`);
        }
    ]

    while (execucaoPet) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar um pet`);
        console.log(`2 - Listar todos os pets`);
        console.log(`3 - Pegar um pet`);
        console.log(`4 - Atualizar um pet`);
        console.log(`5 - Deletar um pet`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        try {
            funcoes[opcao](empresa)
        } catch (e) {
            console.log(`Essa função não existe!`);
        }
    }
}