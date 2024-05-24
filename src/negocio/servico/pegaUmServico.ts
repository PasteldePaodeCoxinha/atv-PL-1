import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import PegarUm from "../pegarUm";

export default class PegarUmServico extends PegarUm {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public pegarUm(): void {
        let res = ["S", ""]

        while (res[0] == "S") {
            console.clear()
            res[1] = ""
            let nome = this.entrada.receberTexto("Digite o nome do serviço que deseja: ")
            while (nome === "") {
                console.log(`Digite um serviço!`);
                nome = this.entrada.receberTexto("Digite o nome do serviço que deseja: ")
            }

            let servico = this.servicos.filter(p => p.nome === nome)[0]

            if (!servico) {
                console.log(`Não existe serviço com esse nome!`);
            } else {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${servico.nome}`);
                console.log(`Nome social: ${servico.preco}`);

                console.log(`------------------------------------------------------------------------------`);
            }

            while (res[1] !== "0") {
                res[1] = this.entrada.receberTexto(`Digite "0" para sair: `)
            }

            res[0] = this.entrada.receberTexto(`Se deseja pegar mais um serviço digite "S": `)
        }


    }
}