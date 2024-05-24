import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Atualizar from "../atualizar"

export default class AtualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.clear()
        let execucaoAtualizarSer = true
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço que deseja alterar ou "0" para cancelar: `)
        let servico = this.servicos.filter(p => p.nome === nome)[0]

        while (nome !== "0") {

            while (execucaoAtualizarSer) {
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
                        while (this.servicos.filter(c => c.nome === novoNome).length > 0) {
                            console.log(`Já existe um serviço com esse nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }

                        servico.nome = novoNome
                        break;
                    case 2:
                        let novoPreco = this.entrada.receberNumero(`Digite o novo preço: `)
                        servico.preco = novoPreco
                        break;
                    default:
                        execucaoAtualizarSer = false
                        break;
                }
            }

            nome = this.entrada.receberTexto(`Digite o nome de outro servico, ou "0" para cancelar: `)
            servico = this.servicos.filter(p => p.nome === nome)[0]
            execucaoAtualizarSer = true
        }
    }
}