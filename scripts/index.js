window.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/livros')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.card-list');
      if (!container) {
        console.error('Elemento .card-list não encontrado');
        return;
      }

      container.innerHTML = '';

      const livrosComImagem = data.filter(item => item.imagemUrl);

      livrosComImagem.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'card-item swiper-slide';

        slide.innerHTML = `
          <a class="card-link" href="#">
            <img class="card-image" src="${item.imagemUrl}" alt="${item.titulo}" />
            <h3 class="titulo-livro">${item.titulo}</h3>
          </a>
        `;

        container.appendChild(slide);
      });

      console.log(`Slides carregados: ${livrosComImagem.length}`);

      new Swiper('.container.swiper', {
        loop: true,
        spaceBetween: 10,
        grabCursor: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          930: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
          1500: { slidesPerView: 5 }
        }
      });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
});
