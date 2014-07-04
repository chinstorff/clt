Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen

	// load everything
	game.load.image('grid', 'assets/img/grid.png');
    },

    create: function () {
	game.state.start('Menu');
    }
};
