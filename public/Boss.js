/**
 * Monstruo al que tenemos que destruir
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el boss
     */
    constructor (game) {
            super(game, BOSS_SPEED, BOSS_PICTURE, BOSS_PICTURE_DEAD);
    }

     /**
     * Mata al jefe
     */
    collide() {
        if (!this.dead) {
            this.game.score = this.game.score + 1;
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            this.image.src = this.myImageDead;
            this.dead = true;
        }

    }
}