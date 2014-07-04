Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	A.grid = new Grid();
	A.grid.addPossible('queen');
	A.grid.addPossible('filled');

	game.stage.backgroundColor = '#acf';
	game.add.sprite(0, 0, 'grid');

	A.queens.push([1, 1]);
	this.updateGrid();
	this.paint();
    },

    update: function () {

	this.paint();
    },

    updateGrid: function () {
	var filled = [];
	A.grid.clear();
	
	for (var i = 0; i < A.queens.length; i++) {
	    q = A.queens[i];

	    A.grid.addPiece(q[0], q[1], 'queen', true);
	    this.generateFilled(q[0], q[1]);
	}	
    },

    paint: function () {
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

    generateFilled: function (x, y) {
	// horizontally
	for (var i = 0; i < A.grid.columns; i++) {
	    A.grid.addPiece(i, y, 'filled');
	}

	// vertically
	for (var j = 0; j < A.grid.rows; j++) {
	    A.grid.addPiece(x, j, 'filled');
	}

	// diagonally

    },

    gridToPixels: function (num) {
	return 3 + 37 * num;
    },
};
