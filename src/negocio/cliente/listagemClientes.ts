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
        while (true) {
            res = ""
            console.clear()
            console.log(`1 - Listar todos clientes`);
            console.log(`2 - Listar os 10 clientes que mais consumiram produtos`);
            console.log(`3 - Listar os 10 clientes que mais consumiram serviços`);
            console.log(`4 - Listar os 5 clientes que mais gastaram`);
            console.log(`0 - Cancelar`);

            let listaClientes: Array<Cliente> = []
            let sortCliente: (a: Cliente, b: Cliente) => number

            let opcaoLista = this.entrada.receberNumero(`Digite a sua opção: `)
            if (opcaoLista === 0) {
                break
            }

            while (!(opcaoLista > 0 && opcaoLista <= 4)) {
                console.log(`Não existe essa opção`);
                opcaoLista = this.entrada.receberNumero(`Digite sua opção: `)
            }

            if (opcaoLista === 1) {
                sortCliente = (a: Cliente, b: Cliente): number => {
                    return a.nome.localeCompare(b.nome)
                }
                listaClientes = this.clientes.sort(sortCliente)
            } else if (opcaoLista === 2) {
                sortCliente = (a: Cliente, b: Cliente): number => {
                    return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length
                }
                listaClientes = this.clientes.slice(0, (this.clientes.length >= 10 ? 10 : listaClientes.length)).sort(sortCliente)
            } else if (opcaoLista === 3) {
                sortCliente = (a: Cliente, b: Cliente): number => {
                    return b.getServicosConsumidos.length - a.getServicosConsumidos.length
                }
                listaClientes = this.clientes.slice(0, (this.clientes.length >= 10 ? 10 : listaClientes.length)).sort(sortCliente)
            } else if (opcaoLista === 4) {
                sortCliente = (a: Cliente, b: Cliente): number => {
                    return (Math.floor(b.getValorGasto * 100) * 0.01) - (Math.floor(a.getValorGasto * 100) * 0.01)
                }
                listaClientes = this.clientes.slice(0, (this.clientes.length >= 5 ? 5 : listaClientes.length)).sort(sortCliente)
            }

            console.log(`\nLista de todos clientes:`);
            listaClientes.forEach(cliente => {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`Quatidades de Pets: ${cliente.getPets.length}`);
                console.log(`CPF: ${cliente.getCpf.getValor}          Data de Emissão: ${cliente.getCpf.getDataEmissao.toISOString()}`);
                console.log(`Quantidade RG: ${cliente.getRgs.length}          Quantidade Telefone: ${cliente.getTelefones.length}`);
                console.log(`Quantidade de produtos comprados: ${cliente.getProdutosConsumidos.length}`);
                console.log(`Quantidade de serviços comprados: ${cliente.getServicosConsumidos.length}`);
                console.log(`Total gasto: R$${Math.floor(cliente.getValorGasto * 100) * 0.01}`);
                console.log(`------------------------------------------------------------------------------`);
            });
            console.log(`\n`);

            while (res !== "0") {
                res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
            }
        }
    }
}