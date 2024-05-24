import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarServico from "../negocio/servico/atualizarServico";
import CadastroServico from "../negocio/servico/cadastroServico";
import ExcluirServico from "../negocio/servico/excluirServico";
import ListagemServico from "../negocio/servico/listagemServico";
import PegarUmServico from "../negocio/servico/pegaUmServico";

export default function menuServico(empresa: Empresa) {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let execucaoServico = true
    const funcoes = [
        function parar(empresa: Empresa) {
            execucaoServico = false
        },
        function cadastrarServico(empresa: Empresa) {
            let cadastrar = new CadastroServico(empresa.getServicos)
            cadastrar.cadastrar()
        },
        function listarTodosServicos(empresa: Empresa) {
            let listagem = new ListagemServico(empresa.getServicos)
            listagem.listar()
        },
        function pegarUmServico(empresa: Empresa) {
            let pegarUm = new PegarUmServico(empresa.getServicos)
            pegarUm.pegarUm()
        },
        function atualizarUmServico(empresa: Empresa) {
            let atualizar = new AtualizarServico(empresa.getServicos)
            atualizar.atualizar()
        },
        function deletarUmServico(empresa: Empresa) {
            let excluir = new ExcluirServico(empresa.getServicos)
            empresa.setServicos = excluir.excluir()
        }
    ]

    while (execucaoServico) {
        console.clear()
        console.log(`Opções:`);
        console.log(`1 - Cadastrar um serviço`);
        console.log(`2 - Listar todos os serviços`);
        console.log(`3 - Pegar um serviço`);
        console.log(`4 - Atualizar um serviço`);
        console.log(`5 - Deletar um serviço`);
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