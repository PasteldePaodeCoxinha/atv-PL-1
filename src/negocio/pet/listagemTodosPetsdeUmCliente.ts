import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Listagem from "../listagem";

export default class ListagemTodosPetsdeUmCliente extends Listagem {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public listar(): void {
        let res = ""
        console.clear()
        console.log(`\nLista de todos clientes:`);
        this.pets.sort((a, b) => a.getNome.localeCompare(b.getNome)).forEach(pet => {
            console.log(`------------------------------------------------------------------------------`);
            console.log(`Nome: ${pet.getNome}`);
            console.log(`Genero: ${pet.getGenero}`);
            console.log(`Tipo: ${pet.getTipo}`);
            console.log(`Tamanho: ${pet.getTamanho}`);
            console.log(`------------------------------------------------------------------------------`);
        });
        console.log(`\n`);

        while (res !== "0") {
            res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
        }
    }
}