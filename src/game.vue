<template>
  <div v-on:space="jump" id="app">
    <div class="container" id="game-board">
        <img src="./assets/nuvens.png" id="clouds">
        <img src="./assets/passaros.png" id="passaros">
        <img src="./assets/dibows.png" id="dibows">
        <img src="./assets/ploft-hero-andando.png" class="ploft" id="ploft">

    </div>
  </div>
</template>

<script>

    export default{
        name: 'App',
        data() {
            return {
            isJump: false
            }
        },
        methods: {
            keydown(key) {
            if (key.keyCode === 32) {
                this.jump();
            }
            },
            jump() {
            this.isJump = true;
            }
        },
        mounted() {
            document.addEventListener('keydown', this.keydown);
        },
        beforeDestroy() {
            document.removeEventListener('keydown', this.keydown);
        }
    }

    // const ploft = document.querySelector('.ploft');
    // const dibows = document.querySelector('.dibows');

    // const jump = () => {
    //     ploft.classList.add('jump');
    //     ploft.src = './assets/ploft-hero-pulando.png';

    //     setTimeout(() => {
    //         ploft.classList.remove('jump');
    //         ploft.src = './assets/ploft-hero-andando.png';
    //     }, 1000);
    // }

    // const loop = setInterval(() => {
    //     const dibowsPosition = (dibows).offsetLeft;
    //     const ploftPosition = +window.getComputedStyle(ploft).bottom.replace('px','');
        
    //     console.log(ploftPosition)
    //     if(dibowsPosition <= 100 && dibowsPosition > 0 && ploftPosition < 80){

    //         dibows.style.animation = 'none';
    //         dibows.style.left = `${dibowsPosition}px`;

    //         ploft.style.animation = 'none';
    //         ploft.style.bottom = `${ploftPosition}px`;

    //         ploft.src = './assets/dead.png';
    //         dibows.src = './assets/dibows-puto.png';

    //         clearInterval(loop);
            
    //     }
    // }, 10);

    // document.addEventListener('keydown', jump);
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#game-board{
    width: 70%; /*larguda da minha tela de jogo*/
    height: 500px; /*altura da minha tela de jogo*/
    border: 1px solid #000; /*borda da minha tela de jogo*/
    margin: 0 auto; /*centraliza a tela no centro do navegador grudando o top em 0*/
    position: relative; /*os elementos respeitam a delimitacao da tela*/
    overflow: hidden; /*tudo que sair da tela ele esconde*/
    background-image: url("./assets/fundo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#clouds{
    position: absolute;
    width: 70%;
    bottom: 300px;
    animation: clouds-move 30s infinite linear;
}

#passaros{
    position: absolute;
    width: 10%;
    bottom: 150px;
    animation: birds-move 15s infinite linear;
}

#dibows{
    position: absolute; /*torna a imagem idependente*/
    bottom: 0; /*gruda a imagem na borda inferior da tela de jogo*/
    width: 50px; /*larguda do dibows*/
    animation: dibows-animation 3s infinite linear;/*animacao esta a keyframe respectiva, com 3s de duracao em looping
                                                        infinito e animacao de forma linear*/
}

#ploft{
    width: 50px;
    position: absolute;
    left: 50px;
    bottom: 0;
}

.jump{
    animation: ploft-jump 1s ease-out;
}

@keyframes clouds-move {
    from{
        right: -600px;
    }

    to{
        right: 100%;
    }
}

@keyframes birds-move {
    from{
        right: -600px;
    }

    to{
        right: 100%;
    }
}

@keyframes dibows-animation {
    from{
        right: -50px;
    }

    to{
        right: 100%;
    }
}

@keyframes ploft-jump {
    0% {
        bottom: 0;
    }
    40% {
        bottom: 150px;
    }
    50% {
        bottom: 150px;
    }
    60% {
        bottom: 150px;
    }
    100% {
        bottom: 0;
    }
    
}
</style>
