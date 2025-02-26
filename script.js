//criação modo dark

const modoDark = document.getElementById('dark')
const icon = document.getElementById('icon')

modoDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    if(icon.src.includes("moon.png")){
        icon.src = "img/sun.png";
    } else {
        icon.src = "img/moon.png";
    }

})

function criarTech(imgSrc, alt){
    const img = document.createElement('img');
    img.classList.add('img')
    img.style.width = '50px'
    img.style.backgroundColor = 'inherit'
    img.style.filter = 'grayscale(100%) brightness(0%)'
    img.src = imgSrc;
    img.alt = alt;
    img.title = alt;

    const techContainer = document.createElement('div');
    techContainer.appendChild(img);

    // container de projetos
    const techCompleted = document.getElementById('tech');
    techCompleted.appendChild(techContainer);
}

criarTech('img/html.png', 'html');
criarTech('img/css.png', 'css');
criarTech('img/js.png', 'javascript')
criarTech('img/react.png', 'react')
criarTech('img/csharp.png', 'csharp')
criarTech('img/java.png', 'java')
criarTech('img/sql.png', 'sql')


// Função para criar um novo projeto
function criarProjeto(imagemSrc, altText, codeLink, viewLink) {
    // img
    const img = document.createElement('img');
    img.style.border = '1px solid #000';
    img.style.width = '250px';
    img.src = imagemSrc;
    img.alt = altText;

    //botões
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttonContainer')
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center'
    buttonContainer.style.gap = '30px';
    

    //code
    const codeButton = document.createElement('button');
    const codeLinkElement = document.createElement('a');
    codeButton.classList.add('codeButton')
    codeLinkElement.href = codeLink; 
    codeLinkElement.textContent = 'Code';
    codeButton.appendChild(codeLinkElement);

    //view
    const viewButton = document.createElement('button');
    const viewLinkElement = document.createElement('a');
    viewButton.classList.add('viewButton')
    viewLinkElement.href = viewLink; 
    viewLinkElement.textContent = 'View';
    viewButton.appendChild(viewLinkElement);

   //botões container
    buttonContainer.appendChild(codeButton);
    buttonContainer.appendChild(viewButton);

    //img e botões
    const projectContainer = document.createElement('div');
    projectContainer.appendChild(img);
    projectContainer.appendChild(buttonContainer);

    // container de projetos
    const projectCompleted = document.getElementById('projectCompleted');
    projectCompleted.appendChild(projectContainer);
}


criarProjeto('img/qrcode.png', 'Gerador QRCode', 'https://github.com/EudesNilton/qrcode', 'https://eudesnilton.github.io/qrcode/');
criarProjeto('img/todolist.png', 'Todo List', 'https://github.com/EudesNilton/todolist', 'https://eudesnilton.github.io/todolist/');
criarProjeto('img/imc.png', 'Calculadora IMC', 'https://github.com/EudesNilton/calculadoraImc', 'https://eudesnilton.github.io/calculadoraImc/');
criarProjeto('img/linkinstagram.png', 'Link Instagram', 'https://github.com/EudesNilton/linkInstagram', 'https://link-instagram-snowy.vercel.app/');
criarProjeto('img/thelasofus.png', 'The Last of Us', 'https://github.com/EudesNilton/The-Last-of-Us', 'https://eudesnilton.github.io/The-Last-of-Us/');

        