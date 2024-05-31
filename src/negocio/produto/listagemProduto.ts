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
        while (true) {
            res = ""
            console.clear()
            console.log(`1 - Listar produtos alfabeticamente`);
            console.log(`2 - Listar produtos por mais vendidos`);
            console.log(`3 - Listar produtos por mais vendidos por tipo e raça`);
            console.log(`0 - Cancelar`);

            let listaProduto: Array<Produto> = []
            let sortProduto: (a: Produto, b: Produto) => number

            let opcaoLista = this.entrada.receberNumero(`Digite a sua opção: `)
            if (opcaoLista === 0) {
                break
            }

            while (!(opcaoLista > 0 && opcaoLista <= 4)) {
                console.log(`Não existe essa opção`);
                opcaoLista = this.entrada.receberNumero(`Digite sua opção: `)
            }

            if (opcaoLista === 1) {

                sortProduto = (a: Produto, b: Produto): number => {
                    return a.nome.localeCompare(b.nome)
                }
                listaProduto = this.produtos.sort(sortProduto)

            } else if (opcaoLista === 2) {

                sortProduto = (a: Produto, b: Produto): number => {
                    return b.getRacasCompraram.length - a.getRacasCompraram.length
                }
                listaProduto = this.produtos.sort(sortProduto)

            } else if (opcaoLista == 3) {
                let tipo = this.entrada.receberTexto(`Digite o tipo que deseja: `)
                while (tipo === "") {
                    tipo = this.entrada.receberTexto(`Escolha um tipo: `)
                }

                let escolha = this.entrada.receberTexto(`Deseja ecolher uma raça ("S" ou "N"): `)

                if (escolha.toLocaleLowerCase() === "s") {
                    let raca = this.entrada.receberTexto(`Digite a raça: `)
                    while (raca === "") {
                        raca = this.entrada.receberTexto(`Escolha uma raça: `)
                    }

                    sortProduto = (a: Produto, b: Produto): number => {
                        return ((b.getRacasCompraram.filter(r => r[1].toLocaleLowerCase() === raca.toLocaleLowerCase()).length)
                            -
                            (a.getRacasCompraram.filter(r => r[1].toLocaleLowerCase() === raca.toLocaleLowerCase()).length))
                    }

                    listaProduto = this.produtos.sort(sortProduto)

                } else {
                    sortProduto = (a: Produto, b: Produto): number => {
                        return ((b.getRacasCompraram.filter(r => r[0].toLocaleLowerCase() === tipo.toLocaleLowerCase()).length)
                            -
                            (a.getRacasCompraram.filter(r => r[0].toLocaleLowerCase() === tipo.toLocaleLowerCase()).length))
                    }

                    listaProduto = this.produtos.sort(sortProduto)
                }
            }

            console.log();
            console.log(`\nLista de todos produtos:`);
            this.produtos.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(produto => {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${produto.nome}`);
                console.log(`Preço: ${produto.preco}`);
                console.log(`Quantos clientes compraram: ${produto.getRacasCompraram.length}`);
                console.log(`------------------------------------------------------------------------------`);
            });
            console.log(`\n`);

            while (res !== "0") {
                res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
            }
        }
    }
}