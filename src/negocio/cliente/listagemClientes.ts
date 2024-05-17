import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        let res = ""
        console.clear()
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`------------------------------------------------------------------------------`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}          Data de Emissão: ${cliente.getCpf.getDataEmissao.toISOString()}`);
            console.log(`------------------------------------------------------------------------------`);
        });
        console.log(`\n`);

        while (res !== "0") {
            res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
        }
    }
}