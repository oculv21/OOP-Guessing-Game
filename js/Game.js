class Game {
    constructor () {
        this.missed = 0;
        this.phrases = ['Seize the day', 'Just keep swimming', 'Love conquers all', 'No pain no gain', 'Dream without limits', 'Life is good', 'Work hard play hard'];
        this.activePhrase = 'null';
    }

    /**
     * Chooses a random phrase from the array of phrases
     * @returns {object} a phrase object with the random phrase
     */
    getRandomPhrase() {
        let r = Math.floor(Math.random() * this.phrases.length);
        let obj = new Phrase(this.phrases[r])
        return obj;
    }

    /**
     * Starts game by selecting a phrase and putting it on display
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Handles input from player's keyboard
     */
    handleInteraction() {

    }

    /**
     * If a player makes a wrong guess, this removes a heart
     */
    removeLife() {

    }

    /**
     * Checks to see if all letters have been revealed
     */
    checkForWin() {

    }

    /**
     * Displays game over message when player wins or loses
     */
    gameOver() {

    }

}

