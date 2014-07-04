Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	A.grid = new Grid();

	game.stage.backgroundColor = '#acf';
	game.add.sprite(0, 0, 'grid');

	this.paint();
    },

    update: function () {
	this.paint();
    },

    paint: function () {
	this.paintGrid();
    },

    paintGrid: function () {
	var value;
	for (var j = 0; j < A.grid.rows; j++) {
	    for (var i = 0; i < A.grid.columns; i++) {
		value = A.grid.contentsOf(i, j);
		if (value) {
		    game.add.sprite(this.gridToPixels(i), this.gridToPixels(j), value);
		}
	    }
	}
    },

    gridToPixels: function (num) {
	return 3 + 37 * num;
    },
};
