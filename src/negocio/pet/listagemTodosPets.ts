import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemTodosPets extends Listagem {
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
        console.log(`\nLista de todos clientes:`);
        this.clientes.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(cliente => {
            console.log(`------------------------------------------------------------------------------`);
            console.log(`Dono: ${cliente.nome}`);
            console.log(`----PETS----`);

            cliente.getPets.sort((a, b) => a.getNome.localeCompare(b.getNome)).forEach(pet => {
                console.log(`-----------------------------------`);
                console.log(`Nome: ${pet.getNome}      Genero: ${pet.getGenero}`);
                console.log(`Tipo: ${pet.getTipo}      Raça: ${pet.getRaca}`);
                console.log(`Tamanho: ${pet.getTamanho}`);
                console.log(`-----------------------------------`);
            }
            )
            console.log(`------------------------------------------------------------------------------`);
        });
        console.log(`\n`);

        while (res !== "0") {
            res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
        }
    }
}