Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen

	// load everything
	game.load.image('grid', 'assets/img/grid.png');
	game.load.image('circle', 'assets/img/circle.png');
	game.load.image('full', 'assets/img/full.png');
    },

    create: function () {
	game.state.start('Menu');
    }
};
