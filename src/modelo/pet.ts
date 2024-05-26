export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private tamanho: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tamanho: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tamanho = tamanho
        this.tipo = tipo
    }

    public get getNome() { return this.nome }
    public set setNome(nome: string) { this.nome = nome }

    public get getRaca() { return this.raca }
    public get getGenero() { return this.genero }

    public get getTamanho() { return this.tamanho }
    public set setTamanho(tamanho: string) { this.tamanho = tamanho }

    public get getTipo() { return this.tipo }
}