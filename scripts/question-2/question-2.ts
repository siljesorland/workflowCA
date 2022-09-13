
enum GameGenre {
    Action,
    Adventure,
    Sport,
}

interface Game {
    name: string;
    genre: The GameGenre;
    onlinePlay: boolean, optional;
}

let Action = {
    name: 'Fun adventure Game',
    genre: 'ADVENTURE',
    onlinePlay: true,
}


function createGame(game: Action) {
    return `Name: ${game.name} Genre: ${game.genre} Play online: ${game.onlinePlay}`;
}

module.exports = createGame
console.log(createGame(Action));