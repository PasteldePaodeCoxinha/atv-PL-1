import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.clear()
        console.log(`\nInício do cadastro de produtos`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        while (nome === "") {
            console.log(`Digite um nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        }
        while (this.produtos.filter(p => p.nome.toLowerCase() === nome.toLowerCase()).length > 0) {
            console.log(`Já existe um produto com esse nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        }

        let preco = this.entrada.receberNumero(`Digite o preço do produto: `)

        let produto = new Produto(nome, preco);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }
}