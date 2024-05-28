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
                console.log(`Pets: `);
                cliente.getPets.forEach(p => {
                    console.log(`${p.getNome};`);
                })
                console.log(`Data de cadastro: ${cliente.getDataCadastro.toISOString()}`);
                console.log(`CPF: ${cliente.getCpf.getValor}          Data de Emissão: ${cliente.getCpf.getDataEmissao.toISOString()}`);
                cliente.getRgs.forEach(r => {
                    console.log(`RG: ${r.getValor}          Data de Emissão: ${r.getDataEmissao.toISOString()}`);
                })
                console.log(`Telefones:`);
                cliente.getTelefones.forEach(t => {
                    console.log(`+${t.getDdd} ${t.getNumero}`);
                })
                console.log(`------------------------------------------------------------------------------`);
            }

            while (res[1] !== "0") {
                res[1] = this.entrada.receberTexto(`Digite "0" para sair: `)
            }

            res[0] = this.entrada.receberTexto(`Se deseja pegar mais um cliente digite "S": `)
        }


    }
}