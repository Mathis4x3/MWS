const halo = document.querySelector('.halo');
document.addEventListener('mousemove', (event) => {
    if(window.innerWidth > 992) {
        halo.style.top = `${event.clientY}px`;
        halo.style.left = `${event.clientX}px`;
    }
});