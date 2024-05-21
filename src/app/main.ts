import Entrada from "../io/entrada";
import menuCliente from "../menus/menuCliente";
import menuPet from "../menus/menuPet";
import menuProduto from "../menus/menuProduto";
import menuServico from "../menus/menuServicos";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

let execucao = true

let empresa = new Empresa()
empresa.getClientes.push(new Cliente("a", "a", new CPF("123", new Date()), [new RG("1", new Date())], [new Telefone("55", "456")]))

while (execucao) {
    console.clear()
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    console.log(`Opções:`);
    console.log(`1 - Opções de Cliente`);
    console.log(`2 - Opções de Pets`);
    console.log(`3 - Opções de Produtos`);
    console.log(`4 - Opções de Pets`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            menuCliente(empresa)
            break
        case 2:
            menuPet(empresa)
            break
        case 3:
            menuProduto(empresa)
            break
        case 4:
            menuServico(empresa)
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida =(`)
    }
}