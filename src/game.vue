<template>
  <div id="app">
    <div class="container" id="game-board">
        <img src="./assets/nuvens.png" id="clouds"/>
        <img src="./assets/passaros.png" id="passaros"/>
        <img ref="dibows" :src="imgDibows" id="dibows"/> <!-- put ':' at front of variable to made dinamic -->
        <img ref="ploft" :class="{'jump': isJump}" :src="imgploft" id="ploft" class="ploft" /> <!-- //put ':' at front of variable to made dinamic -->
        <img v-if="isDead" :src="imggameOver" id="gameover"/> <!-- v-if verify condicional game over to set the img -->
    </div>

    <pre>


        'pre' made a dbug screen to see the elements changing

        Press 'R' to restart

        this is jump: {{isJump}}

        this is img ploft: {{imgploft}}

        this is img dibows: {{imgDibows}}

        this is the end: {{isDead}}{{imggameOver}}
    </pre>
  </div>
</template>

<script>
    export default{
        name: 'App',
        data() {
            return {
                // to made our elements dinamic, we need to put the assets at public path to.
                isgameOver: false, //at start our game over is false
                isJump: false, //jump event start false
                isDead: false,  // dead event start false
                imgploft: './assets/ploft-hero-andando.png', //maded img a variable

                imgploftAndando: './assets/ploft-hero-andando.png', //maded img a variable
                imgploftPulando: './assets/ploft-hero-pulando.png', //maded img a variable
                imgploftDie: './assets/dead.png', //maded img a variable


                imgDibows: './assets/dibows.png', //maded img a variable

                imgDibowsAndando: './assets/dibows.png', //maded img a variable
                imgDibowsPuto: './assets/dibows-puto.png', //maded img a variable

                
                imggameOver: './assets/game_over_PNG57.png', //maded img a variable
            }
        },
        methods: {
            reset() {
                window.location.reload(); //restart variable
            },
            keydown(key) {
                if (key.key === " ") { //looking for key space, if this key was pressed, we call jump
                    this.jump();
                }

                if (key.key === 'r') { //looking for key r, if this key was pressed, we call reset 
                    this.reset();
                }
            },
            jump() {
                if (this.isDead) return; // if isdead = true, we stop the game.

                this.isJump = true; //changing isjump to true
                this.imgploft = this.imgploftPulando; //changing imgploft to jumping

                setTimeout(() => { //after 1 second, we need to back together 
                    this.isJump = false; //set is jump false
                    this.imgploft = this.imgploftAndando; //set img ploft walking again
                }, 1000);
            },
            check() {
                const loop = setInterval(() => {
                    const dibowsPosition = parseFloat(this.$refs.dibows.offsetLeft); //we used parsefloat to made this refs a number variable
                    const ploftPosition = parseFloat(window.getComputedStyle(this.$refs.ploft).bottom.replace('px','')); // we used $ to check our html element
                        
                    if(dibowsPosition <= 100 && dibowsPosition > 0 && ploftPosition < 80){ // conditions to end game
                        this.isDead = true;

                        this.$refs.dibows.style.animation = 'none';
                        this.$refs.dibows.style.left = `${dibowsPosition}px`;

                        this.imgDibows = this.imgDibowsPuto;

                        this.$refs.ploft.style.animation = 'none';
                        this.$refs.ploft.style.bottom = `${ploftPosition}px`;

                        this.imgploft = this.imgploftDie,
                        
                        clearInterval(loop); // if dead = true we need to stop the looping.
                    }

                }, 10); // this check looping need to run faster, cas we need to check this events to set end game.
            }
        },
        mounted() {
            document.addEventListener('keydown', this.keydown); //listener to key event
            this.check();
        },
        beforeDestroy() {
            document.removeEventListener('keydown', this.keydown); //back up
        }
    }
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#game-board{
    width: 70%; /*off my game screen*/
    height: 500px; /*height of my game screen*/
    border: 1px solid #000; /*edge of my game screen*/
    margin: 0 auto; /*center the screen in the center of the browser by gluing the top to 0*/
    position: relative; /*the elements respect the boundaries of the screen*/
    overflow: hidden; /*everything that comes out of the screen it hides*/
    background-image: url("./assets/fundo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#gameover{ /* make the gameover responsive */
    position: absolute;
    width: 30%;
    top: 0; bottom: 0; 
    left: 0; right: 0;
    margin: auto;
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
    position: absolute; /*makes the image independent*/
    bottom: 0; /*sticks the image to the bottom edge of the game screen*/
    width: 50px;
    animation: dibows-animation 3s infinite linear;/*animation is the respective keyframe, with 3s duration in infinite looping and linear animation*/
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