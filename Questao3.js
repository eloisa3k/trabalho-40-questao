let estoque = ("Peça1", "Peça2", "Peça" );

function atualizarEstoque (novaPeca) {

estoque.unshift (novaPeca);

estoque.pop();

console.log("Estoque atualizado:", estoque);
 }