class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['Seize the day', 'Just keep swimming', 'Love conquers all', 'No pain no gain', 'Dream without limits', 'Life is good', 'Work hard play hard'];
        this.activePhrase = null;
    }

    /**
     * Chooses a random phrase from the array of phrases
     * @returns {object} a phrase object with the random phrase
     */
    getRandomPhrase() {
        const r = Math.floor(Math.random() * this.phrases.length);
        const obj = new Phrase(this.phrases[r]);
        return obj;
    }

    /**
     * Starts game by removing starting overlay, selecting a phrase and putting it on display
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.getElementById('hint').style.display = 'none';
    }

    /**
     * Handles input from onscreen keyboard
     * @param event object that is triggered when an onscreen keyboard button is clicked
     */
    handleInteraction(event) {
        const btn = event.target;
        const key = event.target.textContent;
        btn.setAttribute('disabled', true);
        if (this.activePhrase.checkLetter(key)) {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key);
            this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            btn.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
     * Handles input from player's keyboard
     * @param keyboard key that gets pressed
     */
    handleKeyboardInteraction(keyPressed) {
        const key = keyPressed;
        const onscreenKeys = document.getElementsByClassName('key');
        let btn;
        for(let k of onscreenKeys) {
            if (k.textContent == key) {
                btn = k;
            } 
        };
        if (this.activePhrase.checkLetter(key)) {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key);
            this.checkForWin();
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            btn.classList.add('wrong');
            if(btn.disabled == false) {
                this.removeLife();
            } 
        }
        btn.disabled = true;
    }

    /**
     * If a player makes a wrong guess, this removes a heart and increments the missed property
     */
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        const loseHeart = n => hearts[n].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        switch (this.missed) {
            case 1:
                loseHeart(0);
                break;
            case 2:
                loseHeart(1);
                break;
            case 3:
                loseHeart(2);
                break;
            case 4:
                loseHeart(3);
                break;
            case 5:
                loseHeart(4);
                this.gameOver();
                break;
        }
    }

    /**
     * Checks to see if all letters have been revealed
     * @returns {boolean} true if the player has won
     */
    checkForWin() {
        const phraseLettersArray = Array.prototype.slice.call(document.querySelectorAll('#phrase .letter')); //this methood of converting the nodelist into an array was copied from https://davidwalsh.name/nodelist-array
        const onDisplay = c => c.classList.contains('show');
        if (phraseLettersArray.every(onDisplay) && this.missed < 5) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Resets game by restoring live hearts, resetting the missed property to 0, showing a new phrase, and enabling the keyboard buttons
     */
    resetGame() {
        this.missed = 0;
        const hearts = document.querySelectorAll('.tries img')
        for (let h of hearts) {
            h.setAttribute('src', 'images/liveHeart.png')
        }
        document.getElementById('phrase').innerHTML = '<ul></ul>';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        const keys = document.getElementsByClassName('key');
        for (let k of keys) {
            k.removeAttribute('disabled');
            if (k.classList.contains('chosen')) {
                k.classList.remove('chosen')
            } else if (k.classList.contains('wrong')) {
                k.classList.remove('wrong');
            }
        }
        document.getElementById('hint_btn').style.display = 'inline-block';
        document.getElementById('hint').style.display = 'none';
    };


    /**
     * Displays game over message when player wins or loses, and gives player the option of playing a new game
     */
    gameOver() {
        document.getElementById('overlay').style.display = 'flex';
        if (this.checkForWin()) {
            document.getElementById('game-over-message').textContent = 'YOU WON!';
            document.getElementById('overlay').classList.add('win');
            document.getElementById('overlay').classList.remove('lose');
        } else if (this.missed == 5) {
            document.getElementById('game-over-message').textContent = 'BETTER LUCK NEXT TIME';
            document.getElementById('overlay').classList.add('lose');
            document.getElementById('overlay').classList.remove('win');
        }
        const resetBtn = document.getElementById('btn__reset');resetBtn.textContent = 'New Game';
        resetBtn.addEventListener('click', () => {
            this.resetGame();
        });
    }
}

