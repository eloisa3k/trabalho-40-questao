let catalogo = ["Aventuras Incríveis", "Mistérios da Cidade", "O Segredo da Montanha", "Contos de Fadas"];

function verificarLivro(nomeDoLivro) {
  const indice = catalogo.indexOf(nomeDoLivro);
  if (indice > -1) {
    return indice; 
  } else {
    return "Erro: Livro não encontrado no catálogo.";
  }
}


let livroProcurado1 = "Mistérios da Cidade";
let resultado1 = verificarLivro(livroProcurado1);
console.log(`O livro "${livroProcurado1}" está no índice: ${resultado1}`);

let livroProcurado2 = "Histórias do Espaço";
let resultado2 = verificarLivro(livroProcurado2);
console.log(resultado2);