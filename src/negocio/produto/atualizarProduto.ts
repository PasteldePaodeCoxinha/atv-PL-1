import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Atualizar from "../atualizar"

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.clear()
        let execucaoAtualizarPro = true
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto que deseja alterar ou "0" para cancelar: `)

        while (this.produtos.filter(p => p.nome === nome).length <= 0) {
            if (nome === "0") {
                break
            }
            console.log(`Não existe um produto com esse nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do produto que deseja alterar ou "0" para cancelar: `)
        }

        let produto = this.produtos.filter(p => p.nome === nome)[0]

        while (nome !== "0") {

            while (execucaoAtualizarPro) {
                console.clear()
                console.log(`O que deseja alterar?`);
                console.log(`1 - Nome`);
                console.log(`2 - Preço`);
                console.log(`0 - Cancelar atualização`);

                let opcao = this.entrada.receberNumero(`Digite o número da opção: `)

                switch (opcao) {
                    case 1:
                        let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
                        while (novoNome === "") {
                            console.log(`Digite um nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }
                        while (this.produtos.filter(c => c.nome === novoNome).length > 0) {
                            console.log(`Já existe um produto com esse nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }

                        produto.nome = novoNome
                        break;
                    case 2:
                        let novoPreco = this.entrada.receberNumero(`Digite o novo preço: `)
                        produto.preco = novoPreco
                        break;
                    default:
                        execucaoAtualizarPro = false
                        break;
                }
            }

            nome = this.entrada.receberTexto(`Digite o nome de outro produto, ou "0" para cancelar: `)
            while (this.produtos.filter(p => p.nome === nome).length <= 0) {
                console.log(`Não existe um produto com esse nome!`);
                nome = this.entrada.receberTexto(`Por favor informe o nome do produto que deseja alterar ou "0" para cancelar: `)
            }

            produto = this.produtos.filter(p => p.nome === nome)[0]
            execucaoAtualizarPro = true
        }
    }
}