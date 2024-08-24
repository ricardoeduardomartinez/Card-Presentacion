document.addEventListener("DOMContentLoaded", function() {
    const elementoTexto = document.querySelector('.text__biopic');
    const textoOriginal = elementoTexto.textContent;
    let index = 0;
    const velocidad = 10; // Velocidad del efecto en milisegundos

    elementoTexto.textContent = ''; // Limpiar el contenido inicial

    function escribirTexto() {
        if (index < textoOriginal.length) {
            elementoTexto.textContent += textoOriginal.charAt(index);
            index++;
            setTimeout(escribirTexto, velocidad);
        }
    }

    escribirTexto();
});
