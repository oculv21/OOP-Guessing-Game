const game = new Game();
/**
 * Event listener for start button creates a new game object, starts a new game and adds event listeners to keyboard keys
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
document.addEventListener('keydown', event => {
            game.handleKeyboardInteraction(event.key);
    });

/**
 * Event listener for hint button reveals a hint about the phrases
 */
const hintBtn = document.getElementById('hint_btn');
hintBtn.addEventListener('click', () => {
    hintBtn.style.display = 'none';
    document.getElementById('hint').style.display = 'inline-block';
})