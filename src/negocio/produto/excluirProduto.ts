import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Exclui from "../excluir";

export default class ExcluirProduto extends Exclui {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir() {
        console.clear()
        while (true) {
            let tamanhoOriginal = this.produtos.length
            let nome = this.entrada.receberTexto(`Digite o nome do produto que deseja excluir, se deseja cancelar digite "0": `)
            this.produtos = this.produtos.filter(p => p.nome.toLowerCase() != nome.toLowerCase())

            if (nome === "0") {
                break
            }
            if (this.produtos.length === tamanhoOriginal) {
                console.log(`Não existe um produto com esse nome!`);
            } else {
                console.log(`produto excluído!`);
            }
        }

        return this.produtos
    }
}