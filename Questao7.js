let listaDeEspera = ["JogadorA", "JogadorB", "JogadorC", "JogadorD"];

function iniciarPartida() {
  if (listaDeEspera.length > 0) {
    const primeiroJogador = listaDeEspera.shift();
    console.log(`${primeiroJogador} iniciou a partida!`);
    if (listaDeEspera.length < 3) {
      const novoJogador = "NovoJogador";
      listaDeEspera.unshift(novoJogador);
      console.log(`${novoJogador} entrou na lista de espera.`);
    }
  } else {
    console.log("Não há jogadores suficientes na lista de espera.");
  }
  console.log("Lista de espera atual:", listaDeEspera);
}

