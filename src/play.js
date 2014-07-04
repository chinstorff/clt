Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	A.grid = new Grid();

	game.stage.backgroundColor = '#acf';
	game.add.sprite(0, 0, 'grid');

	this.paint();
    },

    update: function () {

    },

    paint: function () {
	this.paintGrid();
    },

    paintGrid: function () {
	for (var j = 0; j < A.grid.rows; j++) {
	    for (var i = 0; i < A.grid.columns; i++) {
		
	    }
	}
    },
};
