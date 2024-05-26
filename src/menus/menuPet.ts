import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Telefone from "../modelo/telefone";

export default function menuPet(empresa: Empresa) {
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    let execucaoPet = true
    const funcoes = [
        function parar(cliente: Cliente) {
            execucaoPet = false
        },
        function cadastrarPet(cliente: Cliente) {
            console.log(`NADA`);
        },
        function listarTodosPets(cliente: Cliente) {
            console.log(`NADA`);
        },
        function pegarUmPet(cliente: Cliente) {
            console.log(`NADA`);
        },
        function atualizarUmPet(cliente: Cliente) {
            console.log(`NADA`);
        },
        function deletarUmPet(cliente: Cliente) {
            console.log(`NADA`);
        }
    ]


    while (true) {
        execucaoPet = true
        console.log(`Opções: `);
        console.log(`1 - Escolher um cliente`);
        console.log(`2 - Listar todos Pets`);
        console.log(`0 - Cancelar`);

        let entrada2 = new Entrada()
        let opcao2 = entrada2.receberNumero(`Digite a opção: `)

        if (opcao2 === 1) {
            let nome = entrada2.receberTexto("Digite o nome do cliente que deseja: ")
            while (nome === "") {
                console.log(`Digite um nome!`);
                nome = entrada2.receberTexto("Digite o nome do cliente que deseja: ")
            }
            let cliente = empresa.getClientes.filter(c => c.nome === nome)[0]
            while (!cliente) {
                console.log(`esse cliente não existe!`);
                let nome = entrada2.receberTexto("Digite o nome do cliente que deseja: ")
                while (nome === "") {
                    console.log(`Digite um nome!`);
                    nome = entrada2.receberTexto("Digite o nome do cliente que deseja: ")
                }
                cliente = empresa.getClientes.filter(c => c.nome === nome)[0]
            }

            while (execucaoPet) {
                console.clear()

                console.log(`Opções:`);
                console.log(`1 - Cadastrar um pet`);
                console.log(`2 - Listar todos os pets de um cliente`);
                console.log(`3 - Pegar um pet`);
                console.log(`4 - Atualizar um pet`);
                console.log(`5 - Deletar um pet`);
                console.log(`0 - Sair`);

                let entrada = new Entrada()
                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                try {
                    funcoes[opcao](cliente)
                } catch (e) {
                    console.log(`Essa função não existe!`);
                }
            }
        } else if (opcao2 === 2) {
            console.log(`eita`);
        } else {
            break
        }

    }
}