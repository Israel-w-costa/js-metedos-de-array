const botoes = document.querySelectorAll (".btn")
botoes.forEach ( botao => {
    botao.addEventListener ('click', filtraOBotaoUtilizado  )
}
)

function filtraOBotaoUtilizado () {
    const elementobtnID = document.getElementById (this.id)
    const categoria =elementobtnID.value
    let livrosFiltrados = categoria == 'disponiveis' ? livros.filter (livro=>livro.quantidade >0) :livros.filter (
         livro => livro.categoria == categoria
        )
        adicionarLivroNaTela (livrosFiltrados)
}

console.log (botoes)