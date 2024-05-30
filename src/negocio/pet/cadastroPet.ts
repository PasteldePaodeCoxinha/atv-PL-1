import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Cadastro from "../cadastro"

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.clear()
        console.log(`\nInício do cadastro do pet`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        while (nome === "") {
            console.log(`Digite um nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        }
        while (this.pets.filter(p => p.getNome.toLowerCase() === nome).length > 0) {
            console.log(`Você já tem um pet com esse nome`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        }

        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        while (tipo === "") {
            console.log(`Digite um tipo!`);
            tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        }

        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        while (raca === "") {
            console.log(`Digite uma raça!`);
            raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        }

        let tamanho = this.entrada.receberTexto(`Por favor informe o tamanho do pet: `)
        while (tamanho === "") {
            console.log(`Digite um tamanho!`);
            tamanho = this.entrada.receberTexto(`Por favor informe o tamanho do pet: `)
        }

        let genero = this.entrada.receberTexto(`Por favor informe o genêro do pet: `)
        while (genero === "") {
            console.log(`Digite um genero!`);
            genero = this.entrada.receberTexto(`Por favor informe o genêro do pet: `)
        }


        let pet = new Pet(nome, tipo, raca, tamanho, genero);
        this.pets.push(pet)
        console.log(`\nCadastro concluído :)\n`);
    }
}