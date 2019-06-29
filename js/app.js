/**
 * Event listener for start button
 */
document.getElementById('btn__reset').addEventListener('click', function() {
    const game = new Game();
    game.startGame();
})