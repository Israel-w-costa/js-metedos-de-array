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
        valortotal = precoDosLivrosDisponiveis (livrosFiltrados)
        console.log (valortotal)
        if (categoria == 'disponiveis') {
            valorTotalLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valortotal}</span></p>
          </div>`
        }
}


