let xp = 1001
let nomeXp = ""
if (xp <= 1000){
    nomeXp += "Ferro"
}else if (xp <= 2000){
    nomeXp = "Bronze"
}else if (xp <= 5000){
    nomeXp = "Prata"
}else if (xp <= 7000){
    nomeXp = "Ouro"
}else if (xp <= 8000){
     nomeXp ="Platina"
}else if (xp <= 9000){
    nomeXp ="Ascendente"
}else if (xp <= 10000){
    nomeXp ="Imortal"
}else{
    nomeXp = "Radiante"
}
console.log("O Herói de nome " + nomeXp + " está no nível de " + xp)