Game = {};

A = {
    w: 338,
    h: 300,

    queens: [],
};

Math.rand = function (max) {
    return Math.floor(Math.random() * max);
};

Game.Boot = function (game) { };

Game.Boot.prototype = {
    preload: function () {
	// load images for loading screen
	game.load.image('background', 'assets/img/background.png');
    },

    create: function () {
	game.state.start('Load');
    }
};

