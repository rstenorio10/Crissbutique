document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    
    let slideAtual = 0;
    const totalSlides = slides.length;
    let intervaloCarrossel;

    // Função para mostrar o slide específico
    function mostrarSlide(index) {
        // Remove a classe ativo de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('ativo'));
        dots.forEach(dot => dot.classList.remove('ativo'));

        // Adiciona a classe ativo ao slide e dot atual
        slides[index].classList.add('ativo');
        dots[index].classList.add('ativo');
    }

    // Função para ir para o próximo slide
    function proximoSlide() {
        slideAtual = (slideAtual + 1) % totalSlides;
        mostrarSlide(slideAtual);
    }

    // Função para ir para o slide anterior
    function slideAnterior() {
        slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
        mostrarSlide(slideAtual);
    }

    // Iniciar a rotação automática
    function iniciarCarrossel() {
        intervaloCarrossel = setInterval(proximoSlide, 5000); // Troca a cada 5 segundos
    }

    // Parar a rotação ao interagir
    function resetarIntervalo() {
        clearInterval(intervaloCarrossel);
        iniciarCarrossel();
    }

    // Event Listeners dos botões
    btnNext.addEventListener('click', () => {
        proximoSlide();
        resetarIntervalo();
    });

    btnPrev.addEventListener('click', () => {
        slideAnterior();
        resetarIntervalo();
    });

    // Event Listeners dos indicadores (dots)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideAtual = index;
            mostrarSlide(slideAtual);
            resetarIntervalo();
        });
    });

    // Inicializa o carrossel
    iniciarCarrossel();
});

// ================= LOGICA PARA ROLAR OS CARDS DE PRODUTOS =================

document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona a lista de produtos e o botão da seta
    const listaBiquinis = document.getElementById('lista-biquinis');
    const setaDirBiquinis = document.getElementById('seta-dir-biquinis');

    if (listaBiquinis && setaDirBiquinis) {
        setaDirBiquinis.addEventListener('click', () => {
            // Pega a largura exata de 1 card
            const card = listaBiquinis.querySelector('.card-produto');
            // Calcula o tamanho do card + o espaço (gap) de 25px
            const scrollAmount = card.offsetWidth + 25; 
            
            // Faz a div rolar suavemente para a direita (2 cards por clique)
            listaBiquinis.scrollBy({
                left: scrollAmount * 2, 
                behavior: 'smooth'
            });
        });
    }

    // ================= LOGICA PARA ROLAR OS CARDS DE BODIES =================
    
    const listaBodies = document.getElementById('lista-bodies');
    const setaDirBodies = document.getElementById('seta-dir-bodies');

    if (listaBodies && setaDirBodies) {
        setaDirBodies.addEventListener('click', () => {
            const card = listaBodies.querySelector('.card-produto');
            const scrollAmount = card.offsetWidth + 25; 
            
            listaBodies.scrollBy({
                left: scrollAmount * 2, 
                behavior: 'smooth'
            });
        });
    }
    
});