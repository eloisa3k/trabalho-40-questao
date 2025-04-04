let listaDeChamada = ["Ana", "Carlos", "Mariana", "Pedro"];

function modificarLista(novoAluno, posicaoAdicionar, alunoRemover) {
  listaDeChamada.splice(posicaoAdicionar, 0, novoAluno); 

  const indiceRemover = listaDeChamada.indexOf(alunoRemover);
  if (indiceRemover > -1) {
    listaDeChamada.splice(indiceRemover, 1); 
    console.log("Lista de chamada atualizada:", listaDeChamada);
  } else {
    console.log(`${alunoRemover} não encontrado na lista.`);
  }
}


modificarLista("Sofia", 1, "Carlos");