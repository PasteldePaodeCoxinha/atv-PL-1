import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import PegarUm from "../pegarUm";

export default class PegarUmPet extends PegarUm {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public pegarUm(): void {
        let res = ["S", ""]

        while (res[0] == "S") {
            console.clear()
            res[1] = ""
            let nome = this.entrada.receberTexto("Digite o nome do pet que deseja: ")
            while (nome === "") {
                console.log(`Digite um nome!`);
                nome = this.entrada.receberTexto("Digite o nome do pet que deseja: ")
            }

            let pet = this.pets.filter(p => p.getNome === nome)[0]

            if (!pet) {
                console.log(`Não existe pet com esse nome!`);
            } else {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${pet.getNome}`);
                console.log(`Genero: ${pet.getGenero}`);
                console.log(`Tipo: ${pet.getTipo}`);
                console.log(`Raça: ${pet.getRaca}`);
                console.log(`Tamanho: ${pet.getTamanho}`);
                console.log(`------------------------------------------------------------------------------`);
            }

            while (res[1] !== "0") {
                res[1] = this.entrada.receberTexto(`Digite "0" para sair: `)
            }

            res[0] = this.entrada.receberTexto(`Se deseja pegar mais um pet digite "S": `)
        }
    }
}