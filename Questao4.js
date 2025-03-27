let recomendacoes = ["Vídeol", "Vídeo2", "Vídeo3", "Vídeo4"];

let contadorRemocoes = 0;

function removerUltimoVideo() {

if (recomendacoes.length > 0) {

recomendacoes.pop();

contadorRemocoes++;

}

if (contadorRemocoes === 3) {

recomendacoes.push("NovoVídeoSugerido");

contadorRemocoes = 0;

}

console.log("Lista de recomendações:", recomendacoes);

}