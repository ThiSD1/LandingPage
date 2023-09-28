// ------------------ Efeitos de Fade-In ------------------ 
// Este bloco de código adiciona um efeito de fade-in aos elementos com a classe 'fade-in' ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', function () {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    });
});

// ------------------ Validação de Formulário ------------------ 
// Este bloco de código valida o formulário para garantir que todos os campos estejam preenchidos
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const quantity = document.getElementById('quantity').value;
        
        if (!name || !email || !phone || !quantity) {
            alert('Todos os campos são obrigatórios.');
            return;
        }
    });
});

// ------------------ Configurações do Carrossel ------------------ 
// Este bloco de código controla o comportamento do carrossel de imagens
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('carrosselSuco'), {
        interval: 3000,  // Rotação a cada 3 segundos
        wrap: true,      // Retorna ao primeiro item ao chegar ao final
        pause: false,    // Não pausa ao passar o mouse por cima
        keyboard: false  // Desativa controles pelo teclado
    });
});

// ------------------ Navegação em Dispositivos Móveis ------------------ 
// Este bloco de código controla o comportamento da barra de navegação em dispositivos móveis
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navegacao');
    
    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});
