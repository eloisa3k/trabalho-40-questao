let agenda = ["Café da manhã (8:00)", "Aula de Matemática (9:00)", "Almoço (12:00)", "Tarefa de Ciências (14:00)"];

function adicionarEvento(evento, posicao) {
  agenda.splice(posicao, 0, evento); 
  console.log("Evento adicionado:", agenda);
}

function removerEvento(evento) {
  const indice = agenda.indexOf(evento); 
  if (indice > -1) {
    agenda.splice(indice, 1); 
    console.log("Evento removido:", agenda);
  } else {
    console.log("Evento não encontrado na agenda.");
  }
}

adicionarEvento("Passeio no parque (16:00)", 3); 
removerEvento("Aula de Matemática (9:00)"); exi
removerEvento("Festa do pijama (20:00)"); 