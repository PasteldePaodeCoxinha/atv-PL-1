import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";

export default class RegistroCompra {
    private empresa: Empresa
    private entrada: Entrada
    constructor(empresa: Empresa) {
        this.empresa = empresa
        this.entrada = new Entrada()
    }

    public registrarCompra() {
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente que deseja registrar a compra ou "0" para cancelar: `)

        while (this.empresa.getClientes.filter(c => c.nome.toLowerCase() === nome.toLowerCase()).length <= 0) {
            if (nome === "0") {
                break
            }
            console.log(`Não existe um cliente com esse nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do cliente que deseja alterar ou "0" para cancelar: `)
        }

        let cliente = this.empresa.getClientes.filter(c => c.nome.toLowerCase() === nome.toLowerCase())[0]

        while (nome !== "0") {
            while (true) {
                let opcaoRegistro = this.entrada.receberTexto(`Deseja registrar um "Servico" ou um "Produto" ("0" para cancelar): `)

                if (opcaoRegistro === "0") {
                    break
                }

                while (opcaoRegistro !== "Servico" && opcaoRegistro !== "Produto") {
                    console.log(`Escolha entre "Servico" e "Produto"`);
                    opcaoRegistro = this.entrada.receberTexto(`Deseja registrar um "Servico" ou um "Produto": `)
                }

                if (opcaoRegistro === "Produto") {
                    let nomePro = this.entrada.receberTexto(`Digite o nome do produto que deseja: `)
                    while (nomePro === "") {
                        console.log(`Digite um produto`);
                        nomePro = this.entrada.receberTexto(`Digite o nome do produto que deseja: `)
                    }
                    while (this.empresa.getProdutos.filter(p => p.nome.toLowerCase() === nomePro.toLowerCase()).length <= 0) {
                        console.log(`Esse produto não existe`);
                        nomePro = this.entrada.receberTexto(`Digite o nome do produto que deseja: `)
                    }
                    let produto = this.empresa.getProdutos.filter(p => p.nome.toLowerCase() === nomePro.toLowerCase())[0]

                    let nomePet = this.entrada.receberTexto(`Digite o nome do pet que é o destinátario do produto: `)
                    while (nomePet === "") {
                        console.log(`Digite um pet`);
                        nomePet = this.entrada.receberTexto(`Digite o nome do pet que é o destinátario do produto: `)
                    }
                    while (cliente.getPets.filter(p => p.getNome.toLowerCase() === nomePet.toLowerCase()).length <= 0) {
                        console.log(`Esse pet não existe`);
                        nomePet = this.entrada.receberTexto(`Digite o nome do pet que é o destinátario do produto: `)
                    }
                    let pet = cliente.getPets.filter(p => p.getNome.toLowerCase() === nomePet.toLowerCase())[0]

                    cliente.getProdutosConsumidos.push(produto)
                    cliente.setValorGasto = (cliente.getValorGasto) + (produto.preco)

                    produto.getRacasCompraram.push([pet.getTipo, pet.getRaca])

                } else if (opcaoRegistro === "Servico") {
                    let nomeSer = this.entrada.receberTexto(`Digite o nome do serviço que deseja: `)
                    while (nomeSer === "") {
                        console.log(`Digite um serviço`);
                        nomeSer = this.entrada.receberTexto(`Digite o nome do serviço que deseja: `)
                    }
                    while (this.empresa.getServicos.filter(s => s.nome.toLowerCase() === nomeSer.toLowerCase()).length <= 0) {
                        console.log(`Esse serviço não existe`);
                        nomeSer = this.entrada.receberTexto(`Digite o nome do serviço que deseja: `)
                    }
                    let servico = this.empresa.getServicos.filter(s => s.nome.toLowerCase() === nomeSer.toLowerCase())[0]

                    let nomePet = this.entrada.receberTexto(`Digite o nome do pet que é o destinátario do serviço: `)
                    while (nomePet === "") {
                        console.log(`Digite um pet`);
                        nomePet = this.entrada.receberTexto(`Digite o nome do pet que é o destinátario do serviço: `)
                    }
                    while (cliente.getPets.filter(p => p.getNome.toLowerCase() === nomePet.toLowerCase()).length <= 0) {
                        console.log(`Esse pet não existe`);
                        nomePet = this.entrada.receberTexto(`Digite o nome do pet que é o destinátario do serviço: `)
                    }
                    let pet = cliente.getPets.filter(p => p.getNome.toLowerCase() === nomePet.toLowerCase())[0]

                    cliente.getServicosConsumidos.push(servico)
                    cliente.setValorGasto = cliente.getValorGasto + servico.preco

                    servico.getRacasCompraram.push([pet.getTipo, pet.getRaca])
                }
            }

            nome = this.entrada.receberTexto(`Digite o nome de outro cliente, ou "0" para cancelar: `)
            if (nome === "0") {
                break
            }
            while (this.empresa.getClientes.filter(c => c.nome.toLowerCase() === nome.toLowerCase()).length <= 0) {
                console.log(`Não existe um cliente com esse nome!`);
                nome = this.entrada.receberTexto(`Por favor informe o nome do cliente que deseja alterar ou "0" para cancelar: `)
            }

            cliente = this.empresa.getClientes.filter(c => c.nome.toLowerCase() === nome.toLowerCase())[0]
        }
    }
}