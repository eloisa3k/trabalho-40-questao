let carrinho = [] ;

function AdicionarProduto(produto) {
    carrinho.push(produto);
    console.clear("Carrinho atualizado:", carrinho);
}

function remeverUltimoProduuto() {
    if (carrinho.length > 0) {
        carrinho.pop() ;
     } else {
        console.log("o carrinho está vazio", carrinho);
     }
     console.log("Carrinho atualizado:", carrinho);
}
