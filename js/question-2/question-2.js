var GameGenre;
(function (GameGenre) {
    GameGenre[GameGenre["Action"] = 0] = "Action";
    GameGenre[GameGenre["Adventure"] = 1] = "Adventure";
    GameGenre[GameGenre["Sport"] = 2] = "Sport";
})(GameGenre || (GameGenre = {}));
let Action = {
    name: 'Fun adventure Game',
    genre: 'ADVENTURE',
    onlinePlay: true,
};
function createGame(game) {
    return `Name: ${game.name} Genre: ${game.genre} Play online: ${game.onlinePlay}`;
}
console.log(createGame(Action));
