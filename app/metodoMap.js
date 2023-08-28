
function aplicadoDesconto (listaDeLivros) {
    const desconto = 0.3
    livrosComDesconto = listaDeLivros.map (
        listaDeLivro => {
            return {...listaDeLivro , preco: listaDeLivro.preco - (listaDeLivro.preco * desconto)}
        }
        )
        return livrosComDesconto
}