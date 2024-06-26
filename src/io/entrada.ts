import promptSync from "prompt-sync";
export default class Entrada {
    public receberNumero(mensagem: string): number {
        let numero = new Number()
        let prompt = promptSync();

        let valor = prompt(mensagem)
        numero = Number(valor)
        while (Number.isNaN(numero)) {
            valor = prompt(`Digite um número válido: `)
            numero = Number(valor)
        }

        return numero.valueOf()
    }

    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(mensagem)
        return texto
    }

    public receberData(mensagem: string): Date {
        let prompt = promptSync();

        let dia = prompt(`Digite o dia de ${mensagem}: `)
        while (dia === "") {
            dia = prompt(`Por favor digite um dia: `)
        }

        let mes = prompt(`Digite o mês de ${mensagem}: `)
        while (mes === "") {
            mes = prompt(`Por favor digite um mês: `)
        }

        let ano = prompt(`Digite o ano de ${mensagem}: `)
        while (ano === "") {
            ano = prompt(`Por favor digite um ano: `)
        }

        let dataForma = new Date(Number(ano).valueOf() - 1, Number(mes).valueOf(), Number(dia).valueOf())

        while (true) {
            try {
                dataForma.toISOString()
                break
            } catch (e) {
                console.log(`Data inválida, digite de novo!`);
                let dia = prompt(`Digite o dia de ${mensagem}: `)
                while (dia === "") {
                    dia = prompt(`Por favor digite um dia: `)
                }

                let mes = prompt(`Digite o mês de ${mensagem}: `)
                while (mes === "") {
                    mes = prompt(`Por favor digite um mês: `)
                }

                let ano = prompt(`Digite o ano de ${mensagem}: `)
                while (ano === "") {
                    ano = prompt(`Por favor digite um ano: `)
                }

                dataForma = new Date(Number(ano).valueOf(), Number(mes).valueOf() - 1, Number(dia).valueOf())
            }
        }

        return dataForma
    }
}