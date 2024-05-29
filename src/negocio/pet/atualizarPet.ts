import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Atualizar from "../atualizar"

export default class AtualizarPet extends Atualizar {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.clear()
        let execucaoAtualizarPet = true
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja alterar ou "0" para cancelar: `)

        while (this.pets.filter(p => p.getNome === nome).length <= 0) {
            if (nome === "0") {
                break
            }
            console.log(`Não existe um pet com esse nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja alterar ou "0" para cancelar: `)
        }

        let pet = this.pets.filter(p => p.getNome === nome)[0]

        while (nome !== "0") {

            while (execucaoAtualizarPet) {
                console.clear()
                console.log(`O que deseja alterar?`);
                console.log(`1 - Nome`);
                console.log(`2 - Tamanho`);
                console.log(`0 - Cancelar atualização`);

                let opcao = this.entrada.receberNumero(`Digite o número da opção: `)

                switch (opcao) {
                    case 1:
                        let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
                        while (novoNome === "") {
                            console.log(`Digite um nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }
                        while (this.pets.filter(p => p.getNome === novoNome).length > 0) {
                            console.log(`Já existe um pet com esse nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }

                        pet.setNome = novoNome
                        break;
                    case 2:
                        let novoTamanho = this.entrada.receberTexto(`Digite o novo tamanho: `)
                        while (novoTamanho === "") {
                            console.log(`Digite um tamanho!`);
                            novoTamanho = this.entrada.receberTexto(`Por favor informe o novo tamanho: `)
                        }

                        pet.setTamanho = novoTamanho
                        break;
                    default:
                        execucaoAtualizarPet = false
                        break;
                }
            }

            nome = this.entrada.receberTexto(`Digite o nome de outro pet, ou "0" para cancelar: `)
            while (this.pets.filter(p => p.getNome === nome).length <= 0) {
                console.log(`Não existe um pet com esse nome!`);
                nome = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja alterar ou "0" para cancelar: `)
            }

            pet = this.pets.filter(p => p.getNome === nome)[0]
            execucaoAtualizarPet = true
        }
    }
}