const elementoVideo = document.getElementById('meuVideo');
const bgVideo = document.getElementById('bgVideo');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            elementoVideo.classList.add('ativo');
            bgVideo.classList.add('ativo');
        } else {
            elementoVideo.classList.remove('ativo');
            bgVideo.classList.remove('ativo');
        }
    });
}, { threshold: 0.2 });
   
observador.observe(elementoVideo);