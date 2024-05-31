import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public listar(): void {
        let res = ""

        while (true) {
            res = ""
            console.clear()
            console.log(`1 - Listar serviços alfabeticamente`);
            console.log(`2 - Listar serviços por mais vendidos`);
            console.log(`3 - Listar serviços por mais vendidos por tipo e raça`);
            console.log(`0 - Cancelar`);

            let listaServico: Array<Servico> = []
            let sortServico: (a: Servico, b: Servico) => number

            let opcaoLista = this.entrada.receberNumero(`Digite a sua opção: `)
            if (opcaoLista === 0) {
                break
            }

            while (!(opcaoLista > 0 && opcaoLista <= 4)) {
                console.log(`Não existe essa opção`);
                opcaoLista = this.entrada.receberNumero(`Digite sua opção: `)
            }

            if (opcaoLista === 1) {

                sortServico = (a: Servico, b: Servico): number => {
                    return a.nome.localeCompare(b.nome)
                }
                listaServico = this.servicos.sort(sortServico)

            } else if (opcaoLista === 2) {

                sortServico = (a: Servico, b: Servico): number => {
                    return b.getRacasCompraram.length - a.getRacasCompraram.length
                }
                listaServico = this.servicos.sort(sortServico)

            } else if (opcaoLista == 3) {
                let tipo = this.entrada.receberTexto(`Digite o tipo que deseja: `)
                while (tipo === "") {
                    tipo = this.entrada.receberTexto(`Escolha um tipo: `)
                }

                let escolha = this.entrada.receberTexto(`Deseja ecolher uma raça ("S" ou "N"): `)

                if (escolha.toLocaleLowerCase() === "s") {
                    let raca = this.entrada.receberTexto(`Digite a raça: `)
                    while (raca === "") {
                        raca = this.entrada.receberTexto(`Escolha uma raça: `)
                    }

                    sortServico = (a: Servico, b: Servico): number => {
                        return ((b.getRacasCompraram.filter(r => r[1].toLocaleLowerCase() === raca.toLocaleLowerCase()).length)
                            -
                            (a.getRacasCompraram.filter(r => r[1].toLocaleLowerCase() === raca.toLocaleLowerCase()).length))
                    }

                    listaServico = this.servicos.sort(sortServico)

                } else {
                    sortServico = (a: Servico, b: Servico): number => {
                        return ((b.getRacasCompraram.filter(r => r[0].toLocaleLowerCase() === tipo.toLocaleLowerCase()).length)
                            -
                            (a.getRacasCompraram.filter(r => r[0].toLocaleLowerCase() === tipo.toLocaleLowerCase()).length))
                    }

                    listaServico = this.servicos.sort(sortServico)
                }
            }

            console.clear()
            console.log(`\nLista de todos serviços:`);
            listaServico.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(servico => {
                console.log(`------------------------------------------------------------------------------`);
                console.log(`Nome: ${servico.nome}`);
                console.log(`Preço: ${servico.preco}`);
                console.log(`Quantos clientes compraram: ${servico.getRacasCompraram.length}`);
                console.log(`------------------------------------------------------------------------------`);
            });
            console.log(`\n`);

            while (res !== "0") {
                res = this.entrada.receberTexto(`Digite "0" para sair da listagem: `)
            }
        }
    }
}