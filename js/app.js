const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    let phrase = game.getRandomPhrase();
    logPhrase(phrase);
    phrase.addPhraseToDisplay();