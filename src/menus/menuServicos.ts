import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

export default function menuServico(empresa: Empresa) {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let execucaoServico = true
    const funcoes = [
        function parar(empresa: Empresa) {
            execucaoServico = false
        },
        function cadastrarServico(empresa: Empresa) {
            console.log(`NADA`);
        },
        function listarTodosServicos(empresa: Empresa) {
            console.log(`NADA`);
        },
        function pegarUmServico(empresa: Empresa) {
            console.log(`NADA`);
        },
        function atualizarUmServico(empresa: Empresa) {
            console.log(`NADA`);
        },
        function deletarUmServico(empresa: Empresa) {
            console.log(`NADA`);
        }
    ]

    while (execucaoServico) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar um servico`);
        console.log(`2 - Listar todos os servicos`);
        console.log(`3 - Pegar um servico`);
        console.log(`4 - Atualizar um servico`);
        console.log(`5 - Deletar um servico`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        funcoes[opcao](empresa)
    }
}