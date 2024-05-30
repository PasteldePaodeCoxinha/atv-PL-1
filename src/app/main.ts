import Entrada from "../io/entrada";
import menuCliente from "../menus/menuCliente";
import menuPet from "../menus/menuPet";
import menuProduto from "../menus/menuProduto";
import menuServico from "../menus/menuServicos";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import RegistroCompra from "../negocio/compra/RegistroCompra";

let execucao = true

let empresa = new Empresa()
empresa.getClientes.push(new Cliente("a", "a", new CPF("123", new Date(2012, 12, 12)),
[new RG("1", new Date(2001, 1, 1)), new RG("2", new Date(2002, 2, 2))], [new Telefone("55", "456"), new Telefone("55", "654")]))
// ---
empresa.getClientes.push(new Cliente("b", "b", new CPF("321", new Date(2006, 6, 6)),
[new RG("3", new Date(2003, 3, 3)), new RG("4", new Date(2004, 4, 4))], [new Telefone("66", "789"), new Telefone("66", "987")]))
// ---
empresa.getClientes.push(new Cliente("c", "c", new CPF("132", new Date(2006, 1, 1)),
[new RG("5", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("d", "d", new CPF("213", new Date(2007, 2, 2)),
[new RG("6", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("e", "e", new CPF("312", new Date(2007, 4, 4)),
[new RG("7", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("f", "f", new CPF("312", new Date(2007, 4, 4)),
[new RG("8", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("g", "g", new CPF("456", new Date(2007, 6, 6)),
[new RG("9", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("h", "h", new CPF("654", new Date(2007, 8, 8)),
[new RG("10", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("i", "i", new CPF("465", new Date(2007, 10, 10)),
[new RG("11", new Date(2009, 9, 9))], [new Telefone("77", "123")]))
// ---
empresa.getClientes.push(new Cliente("j", "j", new CPF("546", new Date(2007, 12, 12)),
[new RG("12", new Date(2009, 9, 9))], [new Telefone("77", "123")]))


empresa.getClientes[0].getPets.push(new Pet("me", "Cachorro", "Caramelo", "M", "Grande"))

empresa.getClientes[1].getPets.push(new Pet("ga", "Gato", "Laranja", "F", "Médio"))
empresa.getClientes[1].getPets.push(new Pet("ag", "Gato", "Branco", "M", "Pequeno"))

empresa.getClientes[2].getPets.push(new Pet("ab", "Rato", "Branco", "F", "Médio"))
empresa.getClientes[2].getPets.push(new Pet("ba", "Cachorro", "Yorkshine", "F", "Grande"))
empresa.getClientes[2].getPets.push(new Pet("baa", "Gato", "Preto e Branco", "M", "Pequeno"))

empresa.getClientes[3].getPets.push(new Pet("jae", "Hamster", "Laranja e Branco", "M", "Grande"))

empresa.getClientes[4].getPets.push(new Pet("sum", "Passaro", "Arara", "M", "Médio"))
empresa.getClientes[4].getPets.push(new Pet("mus", "Passaro", "Arara", "M", "Pequeno"))

empresa.getClientes[5].getPets.push(new Pet("rex", "cachorro", "Pitbull", "M", "Grande"))
empresa.getClientes[5].getPets.push(new Pet("destruidor", "CACHORRO", "PITBULL", "M", "Grande"))
empresa.getClientes[5].getPets.push(new Pet("pessêgo", "Gato", "Laranja", "F", "Pequeno"))

empresa.getClientes[6].getPets.push(new Pet("Sumi", "Gato", "Pelado", "F", "Médio"))

empresa.getClientes[7].getPets.push(new Pet("corre", "Rato", "Preto", "F", "Grande"))
empresa.getClientes[7].getPets.push(new Pet("cutia", "Hamster", "Laranja e Branco", "M", "Pequeno"))

empresa.getClientes[8].getPets.push(new Pet("Mimosa", "PORco", "Rosa", "M", "Grande"))
empresa.getClientes[8].getPets.push(new Pet("Rosinha", "vaca", "Marrom", "F", "pequena"))
empresa.getClientes[8].getPets.push(new Pet("Gara", "cavalo", "Branco e marrom", "M", "média"))


empresa.getProdutos.push(new Produto("Shampoo", 69.97))
empresa.getProdutos.push(new Produto("Pente", 1000.54))

empresa.getServicos.push(new Servico("Tosa", 40.00))
empresa.getServicos.push(new Servico("Banho", 45.45))

while (execucao) {
    console.clear()
    console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
    console.log(`Opções:`);
    console.log(`1 - Opções de Cliente`);
    console.log(`2 - Opções de Pets`);
    console.log(`3 - Opções de Produtos`);
    console.log(`4 - Opções de Serviços`);
    console.log(`5 - Registrar Compra`);
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
        case 5:
            let registrarCompra = new RegistroCompra(empresa)
            registrarCompra.registrarCompra()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida =(`)
    }
}