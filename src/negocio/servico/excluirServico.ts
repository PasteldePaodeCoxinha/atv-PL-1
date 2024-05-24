import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Exclui from "../excluir";

export default class ExcluirServico extends Exclui {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public excluir() {
        console.clear()
        while (true) {
            let tamanhoOriginal = this.servicos.length
            let nome = this.entrada.receberTexto(`Digite o nome do serviço que deseja excluir, se deseja cancelar digite "0":`)
            this.servicos = this.servicos.filter(p => p.nome != nome)

            if (nome === "0") {
                break
            }
            if (this.servicos.length === tamanhoOriginal) {
                console.log(`Não existe um serviço com esse nome!`);
            } else {
                console.log(`servico excluído!`);
            }
        }

        return this.servicos
    }
}