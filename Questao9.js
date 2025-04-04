let contatos = ["Ana Silva", "Pedro Oliveira", "Mariana Fernandes", "Carlos Alberto Gomes"];

function encontrarContatoNomeLongo() {
  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].length > 10) {
      return contatos[i]; 
    }
  }
  return "Nenhum contato com nome longo encontrado.";
}


let contatoLongo = encontrarContatoNomeLongo();
console.log("Primeiro contato com nome longo:", contatoLongo);