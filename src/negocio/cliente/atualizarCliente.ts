import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Atualizar from "../atualizar"

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.clear()
        let execucaoAtualizarCli = true
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente que deseja alterar ou "0" para cancelar: `)
        let cliente = this.clientes.filter(c => c.nome === nome)[0]

        while (nome !== "0") {

            while (execucaoAtualizarCli) {
                console.clear()
                console.log(`O que deseja alterar?`);
                console.log(`1 - Nome`);
                console.log(`2 - Nome Social`);
                console.log(`3 - Adicionar RG`);
                console.log(`4 - Adicionar/Alterar Telefone`);
                console.log(`5 - Adicionar/Remover Produto`);
                console.log(`6 - Adicionar/Remover Serviços`);
                console.log(`0 - Cancelar atualização`);

                let opcao = this.entrada.receberNumero(`Digite o número da opção: `)

                switch (opcao) {
                    case 1:
                        let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
                        while (novoNome === "") {
                            console.log(`Digite um nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }
                        while (this.clientes.filter(c => c.nome === novoNome).length > 0) {
                            console.log(`Já existe um cliente com esse nome!`);
                            novoNome = this.entrada.receberTexto(`Por favor informe o novo nome: `)
                        }

                        cliente.nome = novoNome
                        break;
                    case 2:
                        let novoNomeSocial = this.entrada.receberTexto(`Digite o novo nome social: `)
                        cliente.nomeSocial = novoNomeSocial
                        break;
                    case 3:
                        let qtdRg = this.entrada.receberNumero(`Digite quantos RG's deseja cadastrar: `)
                        while (qtdRg < 1) {
                            console.log(`Você precisa cadastrar pelo menos um RG!`);
                            qtdRg = this.entrada.receberNumero(`Digite quantos RG's deseja cadastrar: `)
                        }

                        for (let i = 0; i < qtdRg; i++) {
                            console.log(`${i + 1}º RG`);
                            let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                            while (valorRg === "") {
                                console.log(`Digite um valor de RG!`);
                                valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                            }
                            while (Number.isNaN(Number(valorRg))) {
                                console.log(`Digite um valor de RG válido!`);
                                valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                            }
                            while (cliente.getRgs.filter(r => r.getValor == valorRg).length > 0) {
                                valorRg = this.entrada.receberTexto(`Digite um RG válido: `)
                            }

                            let dataRg = this.entrada.receberData(`emissão do RG`);

                            cliente.getRgs.push(new RG(valorRg, dataRg))
                        }
                        break;
                    case 4:
                        console.clear()
                        console.log(`1 - Adicionar telefone`);
                        console.log(`2 - Exluir telefone`);
                        console.log(`0 - Cancelar`);

                        let op = this.entrada.receberNumero(`Digite a opção de telefone: `)
                        if (op === 1) {
                            let novoDdd = this.entrada.receberTexto(`Digite o novo DDD: `)
                            let novoNum = this.entrada.receberTexto(`Digite o novo Tel: `)

                            let novoTelefone = new Telefone(novoDdd, novoNum)

                            cliente.getTelefones.push(novoTelefone)
                        } else if (op === 2) {
                            let telefoneExclui = this.entrada.receberTexto(`Digite o número de telefone que deseja excluir: `)
                            cliente.setTelefones = cliente.getTelefones.filter(t => t.getNumero != telefoneExclui)
                        } else {
                            break
                        }
                        break;

                    default:
                        execucaoAtualizarCli = false
                        break;
                }
            }

            nome = this.entrada.receberTexto(`Digite o nome de outro cliente, ou "0" para cancelar: `)
            cliente = this.clientes.filter(c => c.nome === nome)[0]
            execucaoAtualizarCli = true
        }

        console.log(`\nCadastro concluído :)\n`);
    }
}