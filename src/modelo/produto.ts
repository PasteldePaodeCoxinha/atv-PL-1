export default class Produto {
    public nome: string
    public preco: number
    private racasCompraram: Array<Array<string>>

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.racasCompraram = []
    }

    public get getRacasCompraram(): Array<object> {
        return this.racasCompraram
    }
}