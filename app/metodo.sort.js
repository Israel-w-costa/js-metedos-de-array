const btnOrdenarPorPreco = document.querySelector ("#btnOrdenarPorPreco")
btnOrdenarPorPreco.addEventListener ('click', () => {
    const livrosOrdenadosPorPreco = livros.sort ((primeiroElemento,segundoElemento) => primeiroElemento.preco - segundoElemento.preco )
    console.table (livrosOrdenadosPorPreco)
    adicionarLivroNaTela (livrosOrdenadosPorPreco)
})