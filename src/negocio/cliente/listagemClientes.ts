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
        console.log(`1 - Listar todos clientes`);
        console.log(`2 - Listar os 10 clientes que mais consumiram produtos`);
        console.log(`3 - Listar os 10 clientes que mais consumiram serviços`);
        console.log(`4 - Listar os 5 clientes que mais gastaram`);
        
        console.log(`\nLista de todos clientes:`);
        this.clientes.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(cliente => {
            console.log(`------------------------------------------------------------------------------`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`Quatidades de Pets: ${cliente.getPets.length}`);
            console.log(`CPF: ${cliente.getCpf.getValor}          Data de Emissão: ${cliente.getCpf.getDataEmissao.toISOString()}`);
            console.log(`Quantidade RG: ${cliente.getRgs.length}          Quantidade Telefone: ${cliente.getTelefones.length}`);
            console.log(`------------------------------------------------------------------------------`);
        });
        console.log(`\n`);

        while (res !== "0") {
            res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
        }
    }
}