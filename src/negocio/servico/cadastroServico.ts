import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.clear()
        console.log(`\nInício do cadastro de serviços`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        while (nome === "") {
            console.log(`Digite um nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        }
        while (this.servicos.filter(p => p.nome.toLowerCase() === nome.toLowerCase()).length > 0) {
            console.log(`Já existe um serviço com esse nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        }

        let preco = this.entrada.receberNumero(`Digite o preço do serviço: `)

        let servico = new Servico(nome, preco);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
}