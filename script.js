const slideImg = document.getElementById('slide');
const descricaoEl = document.getElementById('descricao');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let imagens = [];
let index = 0;

// Buscar imagens do JSON Server
fetch('http://localhost:3000/slides')
  .then(response => response.json())
  .then(data => {
    imagens = data;
    mostrarImagem();
  })
  .catch(error => console.error('Erro ao carregar imagens:', error));

function mostrarImagem() {
  if (imagens.length > 0) {
    slideImg.src = imagens[index].imagem;
    descricaoEl.textContent = imagens[index].descricao || ''; // Exibe descrição se existir
  }
}

btnNext.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  mostrarImagem();
});

btnPrev.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarImagem();
});
