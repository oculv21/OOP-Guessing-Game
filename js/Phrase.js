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
        let hiddenPhrase = this.phrase;
        [...hiddenPhrase].forEach(c => console.log(c));
    }

    /**
     * Checks for letter in hidden phrase
     */
    checkLetter() {

    }
    
    /**
     * Reveals the letter(s) on the board that matches the player's selection
     */
    showMatchedLetter() {

    }
} //end of class



