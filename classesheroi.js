//**O Que deve ser utilizado
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos

//## Objetivo:

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//## Saída

//Ao final deve se exibir uma mensagem:

//- "o {tipo} atacou usando {ataque}"
  //ex: mago atacou usando magia
  //guerreiro atacou usando espada

  class heroi{
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.classe = tipo;
    }
    ataques(){
        let ataque;
        switch(this.classe) {
        
        case "guerreiro":
        console.log("atacou com sua espada");break;

        case"mago":
        console.log("uma bola de fogo");break;

        case"monge":
        console.log("soco poderoso");break;

        case"ninja":
        console.log("ataque furtivo");break;
        
        default:
            console.log("ataque basico");
        }
            
       console.log(`${this.nome} de ${this.idade} anos ${this.classe} atacou o rei demonio`)
    }

}

   let herois = [
    new heroi ("Andrew", 28, "guerreiro"),
    new heroi ("Carla", 38, "mago"),
    new heroi ("Noah", 15, "monge"),
    new heroi ("Nine", 19, "ninja"),
   ];

   for (let i = 0; i < herois.length; i++) {
    herois[i].ataques();
   }