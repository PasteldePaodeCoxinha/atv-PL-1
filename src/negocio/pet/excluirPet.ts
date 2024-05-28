import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Exclui from "../excluir";

export default class ExcluirPet extends Exclui {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public excluir() {
        console.clear()
        while (true) {
            let tamanhoOriginal = this.pets.length
            let nome = this.entrada.receberTexto(`Digite o nome do pet que deseja excluir, se deseja cancelar digite "0": `)
            this.pets = this.pets.filter(p => p.getNome != nome)

            if (nome === "0") {
                break
            }
            if (this.pets.length === tamanhoOriginal) {
                console.log(`Não existe um pet com esse nome!`);
            } else {
                console.log(`Pet excluído!`);
            }
        }

        return this.pets
    }
}