  // Função para criar um card
  function criarCard(titulo, conteudo, imagemSrc) {
    // Criar elementos HTML
    var card = document.createElement("div");
    card.classList.add("card");
    var tituloElemento = document.createElement("h2");
    var conteudoElemento = document.createElement("p");
    var imagemElemento = document.createElement("img");

    // Configurar conteúdo dos elementos
    tituloElemento.textContent = titulo;
    conteudoElemento.textContent = conteudo;
    imagemElemento.src = imagemSrc;

    // Adicionar elementos ao card
    card.appendChild(tituloElemento);
    card.appendChild(conteudoElemento);
    card.appendChild(imagemElemento);

    // Adicionar o card ao container na página
    var container = document.getElementById("cardContainer");
    container.appendChild(card);
  }

  // Chamada da função para criar um card
  criarCard("Título do Card", "Este é o conteúdo do card.", "https://via.placeholder.com/300"); // exemplo de URL de imagem
