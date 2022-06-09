

const ploft = document.querySelector('.ploft');
const dibows = document.querySelector('.dibows');

const jump = () => {
    ploft.classList.add('jump');
    ploft.src = './assets/ploft-hero-pulando.png';

    setTimeout(() => {
        ploft.classList.remove('jump');
        ploft.src = './assets/ploft-hero-andando.png';
    }, 1000);
}

const loop = setInterval(() => {
    const dibowsPosition = dibows.offsetLeft;
    const ploftPosition = +window.getComputedStyle(ploft).bottom.replace('px','');
    
    console.log(ploftPosition)
    if(dibowsPosition <= 100 && dibowsPosition > 0 && ploftPosition < 80){

        dibows.style.animation = 'none';
        dibows.style.left = `${dibowsPosition}px`;

        ploft.style.animation = 'none';
        ploft.style.bottom = `${ploftPosition}px`;

        ploft.src = './assets/dead.png';
        dibows.src = './assets/dibows-puto.png';

        clearInterval(loop);
        
    }
}, 10);

document.addEventListener('keydown', jump);