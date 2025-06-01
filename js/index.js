const c1 = document.querySelector('#c1')
const carousel1 = new bootstrap.Carousel(c1, {
    interval: 2000,
    touch: false
})

const c2 = document.querySelector('#c2')
const carousel2 = new bootstrap.Carousel(c2, {
    interval: 2000,
    touch: false
})

const c3 = document.querySelector('#c3')
const carousel3 = new bootstrap.Carousel(c3, {
    interval: 2000,
    touch: false
})

const halo = document.querySelector('.halo');
document.addEventListener('mousemove', (event) => {
    if(window.innerWidth > 992) {
        halo.style.top = `${event.clientY}px`;
        halo.style.left = `${event.clientX}px`;
    }
});