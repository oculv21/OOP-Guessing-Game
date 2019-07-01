class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds phrase to display with blank boxes representing the letters
     */
    addPhraseToDisplay() {
        const phraseSection = document.getElementById('phrase');
        const phraseList = phraseSection.querySelector('ul');
        const hiddenPhrase = this.phrase;
        [...hiddenPhrase].forEach(c => {
            let li = document.createElement('li');
            if (/[a-z]/.test(c)) {
                li.classList.add('hide', 'letter', c);
            } else {
                li.classList.add('space');
            }
            li.textContent = c;
            phraseList.appendChild(li);
        });
    }

    /**
     * Checks for letter in hidden phrase
     * @param {string} the keyboard letter that was selected
     * @returns {boolean} true if the selected key is in the phrase
     */
    checkLetter(key) {
        return this.phrase.includes(key);
    }
    
    /**
     * Reveals the letter(s) on the board that matches the player's selection
     * @param {string} the keyboard letter that was selected
     */
    showMatchedLetter(key) {
        let letters = document.getElementsByClassName(key);
        for (let l of letters) {
            l.classList.add('show');
            l.classList.remove('hide');
        };
    }
} //end of class



