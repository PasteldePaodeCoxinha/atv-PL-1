import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
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
        console.log(`\nInício da atualização de um cliente`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente que deseja alterar ou "0" para cancelar: `)

        while (this.clientes.filter(c => c.nome === nome)) {
            console.log(``);
            
        }
        
        console.log(`\nCadastro concluído :)\n`);
    }
}