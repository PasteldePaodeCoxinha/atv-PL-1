import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import PegarUmCliente from "../negocio/cliente/pegaUmCliente";

export default function menuCliente(empresa: Empresa) {
    let execucaoCliente = true
    const funcoes = [
        function parar(empresa: Empresa) {
            execucaoCliente = false
        },
        function cadastrarCliente(empresa: Empresa) {
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
        },
        function listarTodosClientes(empresa: Empresa) {
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
        },
        function pegarUmCliente(empresa: Empresa) {
            let pegarUm = new PegarUmCliente(empresa.getClientes)
            pegarUm.pegarUm()
        },
        function atualizarUmCLiente(empresa: Empresa) {
            let atualizar = new AtualizarCliente(empresa.getClientes)
            atualizar.atualizar()
        },
        function deletarUmCliente(empresa: Empresa) {
            console.log(`NADA`);
        }
    ]

    while (execucaoCliente) {
        console.clear()
        console.log(`Opções:`);
        console.log(`1 - Cadastrar um cliente`);
        console.log(`2 - Listar todos os clientes`);
        console.log(`3 - Pegar um cliente`);
        console.log(`4 - Atualizar um cliente`);
        console.log(`5 - Deletar um cliente`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        funcoes[opcao](empresa)
    }
}