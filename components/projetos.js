
var projetos = [
  {
    imgSrc: "https://s2.glbimg.com/uKmGy-25FnmER9NB_X0-WV-2if8=/s.glbimg.com/og/rg/f/original/2013/07/19/v72k2z45.jpg",
    titulo: "x",
    descricao: "blablabla",
    tecnologias: `html css javascript`,
  },
]

const cardContainer = document.getElementById("containerDeCards");

const criarProjetoElemento = projeto => {
  const novoCard = document.createElement("div");
  novoCard.classList.add("card");

  novoCard.innerHTML = `
    <div>
      <img src="${projeto.imgSrc}" alt="Imagem do Projeto">
      <button>code</button>
      <button>view</button>
    </div>
    <img src="" alt="">
    <h2>${projeto.titulo}</h2>
    <div>
      <p>${projeto.descricao}</p>
      <span>${projeto.tecnologias}</span>
    </div>
  `;

  return novoCard;
};

projetos.forEach(projeto => {
  cardContainer.appendChild(criarProjetoElemento(projeto));
});