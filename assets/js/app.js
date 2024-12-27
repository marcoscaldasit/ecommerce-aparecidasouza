document.querySelectorAll('.imagem-container img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover-src');
    const newImage = new Image(); // Precarregar a imagem de hover
    newImage.src = hoverSrc;

    img.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    img.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});
