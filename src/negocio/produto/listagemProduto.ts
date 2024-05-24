import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public listar(): void {
        let res = ""
        console.clear()
        console.log(`\nLista de todos produtos:`);
        this.produtos.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(produto => {
            console.log(`------------------------------------------------------------------------------`);
            console.log(`Nome: ${produto.nome}`);
            console.log(`Preço: ${produto.preco}`);
            console.log(`------------------------------------------------------------------------------`);
        });
        console.log(`\n`);

        while (res !== "0") {
            res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
        }
    }
}