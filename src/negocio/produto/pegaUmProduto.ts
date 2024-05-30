import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import PegarUm from "../pegarUm";

export default class PegarUmProduto extends PegarUm {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public pegarUm(): void {
        let res = ["S", ""]

        while (res[0] == "S") {
            console.clear()
            res[1] = ""
            let nome = this.entrada.receberTexto("Digite o nome do produto que deseja: ")
            while (nome === "") {
                console.log(`Digite um produto!`);
                nome = this.entrada.receberTexto("Digite o nome do produto que deseja: ")
            }

            let produto = this.produtos.filter(p => p.nome.toLowerCase() === nome.toLowerCase())[0]

            if (!produto) {
                console.log(`Não existe produto com esse nome!`);
            } else {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${produto.nome}`);
                console.log(`Preço: ${produto.preco}`);
                console.log(produto.getRacasCompraram);
                
                console.log(`------------------------------------------------------------------------------`);
            }

            while (res[1] !== "0") {
                res[1] = this.entrada.receberTexto(`Digite "0" para sair: `)
            }

            res[0] = this.entrada.receberTexto(`Se deseja pegar mais um produto digite "S": `)
        }


    }
}