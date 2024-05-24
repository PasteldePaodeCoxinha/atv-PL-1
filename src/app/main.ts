import Entrada from "../io/entrada";
import menuCliente from "../menus/menuCliente";
import menuPet from "../menus/menuPet";
import menuProduto from "../menus/menuProduto";
import menuServico from "../menus/menuServicos";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";

let execucao = true

let empresa = new Empresa()
empresa.getClientes.push(new Cliente("b", "b", new CPF("321", new Date(2006, 6, 6)),
    [new RG("3", new Date(2003, 3, 3)), new RG("4", new Date(2004, 4, 4))], [new Telefone("66", "789"), new Telefone("66", "987")]))
empresa.getClientes.push(new Cliente("a", "a", new CPF("123", new Date(2012, 12, 12)),
    [new RG("1", new Date(2001, 1, 1)), new RG("2", new Date(2002, 2, 2))], [new Telefone("55", "456"), new Telefone("55", "654")]))

empresa.getProdutos.push(new Produto("Shampoo", 69.97))
empresa.getProdutos.push(new Produto("Pente", 1000.54))

empresa.getServicos.push(new Servico("Tosa", 40.00))
empresa.getServicos.push(new Servico("Banho", 45.45))

empresa.getProdutos.push()

while (execucao) {
    console.clear()
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    console.log(`Opções:`);
    console.log(`1 - Opções de Cliente`);
    console.log(`2 - Opções de Pets`);
    console.log(`3 - Opções de Produtos`);
    console.log(`4 - Opções de Serviços`);
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