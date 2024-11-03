

class hero{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque =""
    }
    
    //Método de ataque do herói
    atacar(tipoDeHeroi){

        if (tipoDeHeroi =="mago"){
            this.ataque = "magia"
        }else if(tipoDeHeroi == "guerreiro"){
             this.ataque = "espada"
        }else if(tipoDeHeroi =="monge"){
            this.ataque ="artes marcias"
        }else if(tipoDeHeroi == "ninja"){
            this.ataque = "shuriken"
        }

        return console.log(`o ${tipoDeHeroi} atacou usando ${this.ataque}`)
    }
}
let heroi = new hero("Alex",48,"monge")
heroi.atacar(heroi.tipo)