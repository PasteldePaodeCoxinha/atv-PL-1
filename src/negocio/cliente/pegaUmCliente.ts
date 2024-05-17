import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import PegarUm from "../pegarUm";

export default class PegarUmCliente extends PegarUm {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public pegarUm(): void {
        let res = ["S", ""]

        while (res[0] == "S") {
            console.clear()
            res[1] = ""
            let nome = this.entrada.receberTexto("Digite o nome do cliente que deseja: ")
            while (nome === "") {
                console.log(`Digite um nome!`);
                nome = this.entrada.receberTexto("Digite o nome do cliente que deseja: ")
            }

            let cliente = this.clientes.filter(c => c.nome === nome)[0]

            if (!cliente) {
                console.log(`Não existe cliente com esse nome!`);
            } else {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}          Data de Emissão: ${cliente.getCpf.getDataEmissao.toISOString()}`);
                console.log(`------------------------------------------------------------------------------`);
            }

            while (res[1] !== "0") {
                res[1] = this.entrada.receberTexto(`Digite "0" para sair: `)
            }

            res[0] = this.entrada.receberTexto(`Se deseja pegar mais um cliente digite "S": `)
        }


    }
}