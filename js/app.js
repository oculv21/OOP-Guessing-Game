const game = new Game();

/**
 * Event listener for start button
 */
document.getElementById('btn__reset').addEventListener('click', function () {
    game.startGame();
});

/**
 * Event listeners for keyboard buttons
 */
const keys = document.getElementsByClassName('key');
for (let key of keys) {
    key.addEventListener('click', event => {
        game.handleInteraction(event);
    });
};