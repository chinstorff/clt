Game = {};

A = {
    w: 300,
    h: 300,
};

Math.rand = function (max) {
    return Math.floor(Math.random() * max);
};

Game.Boot = function (game) { };

Game.Boot.prototype = {
    preload: function () {
	// load images for loading screen

    },

    create: function () {
	game.state.start('Load');
    }
};

