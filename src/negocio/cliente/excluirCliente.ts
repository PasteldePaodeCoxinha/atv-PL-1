import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Exclui from "../excluir";

export default class ExcluirClientes extends Exclui {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir() {
        console.clear()
        while (true) {
            let tamanhoOriginal = this.clientes.length
            let nome = this.entrada.receberTexto(`Digite o nome do cliente que deseja excluir, se deseja cancelar digite "0":`)
            this.clientes = this.clientes.filter(c => c.nome != nome)

            if (nome === "0") {
                break
            }
            if (this.clientes.length === tamanhoOriginal) {
                console.log(`Não existe um cliente com esse nome!`);
            } else {
                console.log(`Cliente excluído!`);
            }
        }

        return this.clientes
    }
}