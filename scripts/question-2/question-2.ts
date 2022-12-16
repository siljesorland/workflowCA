enum GameGenre {
	Action = 'Action',
	Adventure = 'Adventure',
	Sport = 'Sport'
}

interface Game {
	name: string;
	genre: GameGenre;
	onlinePlay?: boolean;
}

const action: Game = {
	name: 'Fun adventure Game',
	genre: GameGenre.Action,
	onlinePlay: true
};

function createGame(game: Game) {
	return `Name: ${game.name} Genre: ${game.genre} Play online: ${game.onlinePlay}`;
}

module.exports = createGame;
console.log(createGame(action));
