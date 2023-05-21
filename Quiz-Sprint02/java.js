const pergunta = [
    {
      perguntas: "Você sabe quantas toneladas de lixo eletrônico são descartadas no Brasil anualmente?",
      escolhas: [ "2,5 milhões de toneladas","53 milhões de toneladas","27 milhões de toneladas","8.7 milhões de toneladas"],
      respostas: 0
    },
    {
      perguntas: "Quantos pontos de coleta de lixo existem no Brasil?",
      escolhas: ["32 mil pontos","10,2 mil pontos","mil pontos","3,4 mil pontos"],
      respostas: 3
    },
    {
      perguntas: "Quantos % podem ser reaproveitados de um eletrônico?",
      escolhas: ["até 50%","até 80%","até 100%","até 20%"],
      respostas: 2
    },
    {
      perguntas: "Em qual ranking o Brasil está em produtor de lixo eletrônico?",
      escolhas: ["primeiro","quinto","sétimo", "oitavo"],
      respostas: 1
    },
    {
      perguntas: "Você (indivíduo) é capaz de fazer diferença no descarte?",
      escolhas: [ "SIM!", "Não"],
      respostas: 0
    }
  ];
  

  let perguntaatual = 0;
  let pontos = 0;
  



function carregarpergunta() {
    const perguntaelement = document.getElementById("perguntas");
    const escolhasElement = document.getElementById("escolhas");
    
    const perguntaatualObj = pergunta[perguntaatual];
    
    perguntaelement.textContent = perguntaatualObj.perguntas;
    
    escolhasElement.innerHTML = "";
    
    for (let i = 0; i < perguntaatualObj.escolhas.length; i++) {
      const escolha = perguntaatualObj.escolhas[i];
      
      const button = document.createElement("button");
      button.textContent = escolha;
      button.classList.add("escolha-btn"); 
      
      button.addEventListener("click", function() {
        checarresposta(i);
      });
      
      escolhasElement.appendChild(button);
    }
  }
  

  

  function checarresposta(escolha) {
    const perguntaatualObj = pergunta[perguntaatual];
    
    if (escolha === perguntaatualObj.respostas) {
      pontos++;
    }
    
    perguntaatual++;
    
    if (perguntaatual === pergunta.length) {
      Mostrarpontuacao();
    } else {
      carregarpergunta();
    }
  }
  

  function Mostrarpontuacao() {
    const resultado = document.getElementById("resultado");
    if (pontos === pergunta.length) {
        resultado.textContent = "Você acertou todas as perguntas!, Meus Parabéns!";
      } else {
        resultado.textContent = "Você acertou " + pontos + " de " + pergunta.length + " perguntas!, Continue tentando!";
      }
    }
    


  carregarpergunta();
  