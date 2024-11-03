

class hero{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    //Método de ataque do herói
    atacar(tipoDeHeroi){

        let tipoDeAtaque = ""
        switch (tipoDeAtaque){
            case (tipoDeHeroi === "mago"):
                tipoDeAtaque = "magia"
                break
            case(tipoDeHeroi === "guerreiro"):
                tipoDeAtaque = "espada"
                break
            case(tipoDeHeroi === "monge"):
                tipoDeAtaque ="artes marcias"
                break
            case(tipoDeHeroi === "ninja"):
                tipoDeAtaque = "shuriken"
                break
        }

        return console.log(`o ${tipoDeHeroi} atacou usando ${tipoDeAtaque}`)
    }
}
let heroi = new hero("Alex",48,"guerreiro")
heroi.atacar(hero.tipo)