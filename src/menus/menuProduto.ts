import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ExcluirProduto from "../negocio/produto/excluirProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import PegarUmProduto from "../negocio/produto/pegaUmProduto";

export default function menuProduto(empresa: Empresa) {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let execucaoProduto = true
    const funcoes = [
        function parar(empresa: Empresa) {
            execucaoProduto = false
        },
        function cadastrarProduto(empresa: Empresa) {
            let cadastrar = new CadastroProduto(empresa.getProdutos)
            cadastrar.cadastrar()
        },
        function listarTodosProdutos(empresa: Empresa) {
            let listagem = new ListagemProdutos(empresa.getProdutos)
            listagem.listar()
        },
        function pegarUmProduto(empresa: Empresa) {
            let pegarUm = new PegarUmProduto(empresa.getProdutos)
            pegarUm.pegarUm()
        },
        function atualizarUmProduto(empresa: Empresa) {
            let atualizar = new AtualizarProduto(empresa.getProdutos)
            atualizar.atualizar()
        },
        function deletarUmProduto(empresa: Empresa) {
            let excluir = new ExcluirProduto(empresa.getProdutos)
            empresa.setProdutos = excluir.excluir()
        }
    ]

    while (execucaoProduto) {
        console.clear()
        console.log(`Opções:`);
        console.log(`1 - Cadastrar um produto`);
        console.log(`2 - Listar todos os produtos`);
        console.log(`3 - Pegar um produto`);
        console.log(`4 - Atualizar um produto`);
        console.log(`5 - Deletar um produto`);
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