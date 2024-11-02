let win = 150
let lose = 8
main()
function getVictoryRank(win,lose){
    let result = win - lose
    return result
}
function getRank(win){
    let rank
    if(win < 11){
        rank = "Ferro"
    }else if (win < 21){
        rank = "Bronze"
    }else if(win < 51){
        rank ="Prata"
    }else if(win < 81){
        rank = "Ouro"
    }else if (win < 91){
        rank = "Diamante"
    }else if (win < 101){
        rank = "Lendário"
    }else{
        rank = "Imortal"
    }
    return rank
}
function main(){
    let victoryCalculator = getVictoryRank(win,lose)
    let rank = getRank(victoryCalculator)
    console.log(`O Herói tem saldo de ${victoryCalculator} está no nível de ${rank}`)
}
