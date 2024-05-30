import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.clear()
        console.log(`\nInício do cadastro do cliente`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        while (nome === "") {
            console.log(`Digite um nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        }
        while (this.clientes.filter(c => c.nome.toLowerCase() === nome.toLowerCase()).length > 0) {
            console.log(`Já existe um cliente com esse nome!`);
            nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        }

        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        while (valorCpf === "") {
            console.log(`Digite um valor de CPF!`);
            valorCpf = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        }
        while (Number.isNaN(Number(valorCpf))) {
            console.log(`Digite um valor de CPF válido!`);
            valorCpf = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        }
        while (this.clientes.filter(c => c.getCpf.getValor === valorCpf).length > 0) {
            valorCpf = this.entrada.receberTexto(`Digite um CPF válido: `)
        }

        let dataCpf = this.entrada.receberData(`emissão do CPF`);

        let rgs: RG[] = []

        let qtdRg = this.entrada.receberNumero(`Digite quantos RG's deseja cadastrar: `)
        while (qtdRg < 1) {
            console.log(`Você precisa cadastrar pelo menos um RG!`);
            qtdRg = this.entrada.receberNumero(`Digite quantos RG's deseja cadastrar: `)
        }
        while (qtdRg > 27) {
            console.log(`Você não pode cadastrar essa quantidade de RG'S!`);
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
            while (rgs.filter(r => r.getValor === valorRg).length > 0) {
                valorRg = this.entrada.receberTexto(`Digite outro RG: `)
            }
            while (this.clientes.filter(c => c.getRgs.filter(r => r.getValor === valorRg).length > 0).length > 0) {
                valorRg = this.entrada.receberTexto(`Digite um RG válido: `)
            }

            let dataRg = this.entrada.receberData(`emissão do RG`);

            rgs.push(new RG(valorRg, dataRg))
        }

        let telefones: Telefone[] = []

        let qtdTel = this.entrada.receberNumero(`Digite quantos telefones deseja cadastrar: `)
        while (qtdTel < 1) {
            console.log(`Você precisa cadastrar pelo menos um telefone!`);
            qtdTel = this.entrada.receberNumero(`Digite quantos telefones deseja cadastrar: `)
        }
        while (qtdTel > 5) {
            console.log(`Você não poder ter mais de 5 telefones!`);
            qtdTel = this.entrada.receberNumero(`Digite quantos telefones deseja cadastrar: `)
        }

        for (let i = 0; i < qtdTel; i++) {
            console.log(`${i + 1}º Telefone`);
            let dddTel = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
            while (dddTel === "") {
                console.log(`Digite um DDD!`);
                dddTel = this.entrada.receberTexto(`Por favor informe o DDD: `);
            }
            while (Number.isNaN(Number(dddTel))) {
                console.log(`Digite um valor de DDD válido!`);
                dddTel = this.entrada.receberTexto(`Por favor informe o DDD: `);
            }

            let numeroTel = this.entrada.receberTexto(`Por favor informe o número do Telefone: `);
            while (numeroTel === "") {
                console.log(`Digite um número de telefone!`);
                numeroTel = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
            }
            while (Number.isNaN(Number(numeroTel))) {
                console.log(`Digite um número de telefone válido!`);
                numeroTel = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
            }
            while (telefones.filter(t => t.getNumero === numeroTel).length > 0) {
                numeroTel = this.entrada.receberTexto(`Digite outro número de telefone: `)
            }
            telefones.push(new Telefone(dddTel, numeroTel))
        }

        let cpf = new CPF(valorCpf, dataCpf);
        let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}