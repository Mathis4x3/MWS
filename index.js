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

const c4 = document.querySelector('#c4')

const carousel4 = new bootstrap.Carousel(c4, {
    interval: 2000,
    touch: false
})

const halo = document.querySelector('.halo');

document.addEventListener('mousemove', (event) => {
    halo.style.top = `${event.clientY}px`;
    halo.style.left = `${event.clientX}px`;
});

function creerPluie(){
    const pluie = document.createElement('div');
    pluie.classList.add('pluie');
    pluie.classList.add('position-absolute');
    pluie.style.width = '5px';
    pluie.style.height = '50px';
    pluie.style.backgroundColor = 'lightblue';
    pluie.style.borderRadius = '5px';
    pluie.style.zIndex = '0';

    return pluie;
}

function ajouterPluie(pluie, nb){
    const nuages = document.getElementsByClassName('nuage');
        const top = nuages[nb].offsetTop + nuages[nb].offsetHeight/2;
        const left = nuages[nb].offsetLeft + 50;
        const right = nuages[nb].offsetLeft + nuages[nb].offsetWidth - 50;

        const rdmPosition = Math.floor(Math.random() * (right - left)) + left;

        pluie.style.top = top+"px";
        pluie.style.left = rdmPosition+"px";

        setInterval(function(){
            if(pluie.offsetTop >= window.innerHeight - 56){
                pluie.remove();
            } else {
                pluie.style.top = (pluie.offsetTop+1)+'px';
            }
        }, 0.5);

        const body = document.querySelector('body');
        body.appendChild(pluie);
}

var nbNuage = 0;
function nuageSuivant(n){
    return n == 1 ? 0 : 1;
}

function fairePluier(){
    ajouterPluie(creerPluie(), nbNuage);
    nbNuage = nuageSuivant(nbNuage);
}
const pluier = fairePluier;
setInterval(pluier, 200);