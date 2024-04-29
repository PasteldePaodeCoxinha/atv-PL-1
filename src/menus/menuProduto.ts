import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

export default function menuProduto() {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let empresa = new Empresa()
    let execucaoProduto = true
    const funcoes = [
        function parar(empresa: Empresa) {
            execucaoProduto = false
        },
        function cadastrarProduto(empresa: Empresa) {
            console.log(`NADA`);
        },
        function listarTodosProdutos(empresa: Empresa) {
            console.log(`NADA`);
        },
        function pegarUmProduto(empresa:Empresa){
            console.log(`NADA`);
        },
        function atualizarUmProduto(empresa:Empresa){
            console.log(`NADA`);
        },
        function deletarUmProduto(empresa:Empresa){
            console.log(`NADA`);
        }
    ]

    while (execucaoProduto) {
        console.log(`Opções:`);
        console.log(`1 - Cadastrar um produto`);
        console.log(`2 - Listar todos os produtos`);
        console.log(`3 - Pegar um produto`);
        console.log(`4 - Atualizar um produto`);
        console.log(`5 - Deletar um produto`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        funcoes[opcao](empresa)
    }
}