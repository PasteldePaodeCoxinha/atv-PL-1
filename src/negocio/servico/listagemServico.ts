import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public listar(): void {
        let res = ""
        console.clear()
        console.log(`\nLista de todos serviços:`);
        this.servicos.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(servico => {
            console.log(`------------------------------------------------------------------------------`);
            console.log(`Nome: ${servico.nome}`);
            console.log(`Preço: ${servico.preco}`);
            console.log(`------------------------------------------------------------------------------`);
        });
        console.log(`\n`);

        while (res !== "0") {
            res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
        }
    }
}