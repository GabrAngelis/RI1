class Personagem {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, forca, resistencia, velocidade){
        this.nome = nome
        this.codinome = codinome
        this.armaPrincipal = armaPrincipal
        this.armaSecundaria = armaSecundaria
        this.forca = forca
        this.resistencia = resistencia
        this.velocidade = velocidade
    }
    descricao(){
        return "Nome do personagem: "+this.nome+"\n"
        +"Codinome do personagem: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPrincipal+"\n"
        +"Arma secundária: "+this.armaSecundaria+"\n"
        +"Nível de força: "+this.forca+"\n"
        +"Nível de resistência: "+this.resistencia+"\n"
        +"Nível de velocidade: "+this.velocidade+"\n"
    }
}

let thor = new Personagem("Thor", "Deus do trovão", "Mjolnir", "Stormbreaker", 95, 95, 70)
let tonyStark = new Personagem("Tony Stark", "Homem de Ferro", "Armadura Mark 85", "Repulsores", 85, 80, 75)
let steveRogers = new Personagem("Steve Rogers", "Capitão América","Escudo de Vibranium", "", 75, 80, 85)
let bruceBanner = new Personagem("Bruce Banner", "Hulk", "Força bruta", "", 100, 100, 60)
let viuvaNegra = new Personagem("Natasha Romanoff", "Viúva Negra", "Bastões elétricos", "Pistolas", 40, 45, 65)
let gaviaoArqueiro = new Personagem("Clint Barton", "Gavião Arqueiro", "Arco e flechas", "", 35, 40, 50)
let Thanos = new Personagem("Thanos", "Titã louco", "Lâmina dupla", "Manopla do infinito", 95, 95, 70)

let personagens = [thor, tonyStark, steveRogers, bruceBanner, viuvaNegra, gaviaoArqueiro, Thanos]


function Batalha(p1, p2){
    console.log("------------------------------")
    console.log(p1.nome+ " contra "+p2.nome+"\n")
    console.log(p1.descricao()+"\n"+p2.descricao()+"\n")
    if(p1.forca > p2.forca){
        console.log(p1.nome+" é mais forte!")
    }
    else{
        console.log(p2.nome+" é mais forte")
    }
    if(p1.resistencia > p2.resistencia){
        console.log(p1.nome+" é mais resistente!")
    }
    else{
        console.log(p2.nome+" é mais resistente")
    }
    if(p1.velocidade > p2.velocidade){
        console.log(p1.nome+" é mais veloz!")
    }
    else{
        console.log(p2.nome+" é mais veloz")
    }
}

 for(let i = 0; i < personagens.length; i++){
     for(let j = i + 1; j < personagens.length; j++)
         Batalha(personagens[i], personagens[j])
 }

// TypeScript é legal!
