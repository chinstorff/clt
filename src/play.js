Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	game.input.onDown.add(this.click, this);

	A.grid = new Grid();
	A.grid.addPossible('queen');
	A.grid.addPossible('filled');

	game.stage.backgroundColor = '#acf';
	game.add.sprite(0, 0, 'grid');

	A.pieces = game.add.group();

	A.queens.push([1, 1]);
	this.updateGrid();
	this.paint();
    },

    update: function () {

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

	A.pieces.removeAll(true);

	for (var j = 0; j < A.grid.rows; j++) {
	    for (var i = 0; i < A.grid.columns; i++) {
		value = A.grid.contentsOf(i, j);
		if (value) {
		    A.pieces.create(this.gridToPixels(i), this.gridToPixels(j), value);
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

    click: function () {
	var x = this.pixelsToGrid(game.input.mousePointer.x);
	var y = this.pixelsToGrid(game.input.mousePointer.y);

	this.updateGrid();

	if (A.grid.contentsOf(x, y) === 'queen') {
	    this.removeQueen(x, y);
	}
	else {
	    this.addQueen(x, y);
	}

	this.updateGrid();
	this.paint();
    },

    addQueen: function (x, y) {
	A.queens.push([x, y]);
	return this;
    },

    removeQueen: function (x, y) {
	for (var i = 0; i < A.queens.length; i++) {
	    var q = A.queens[i];
	    if (q[0] === x && q[1] === y) {
		A.queens.splice(i, 1);
	    }
	}
	return this;
    },

    gridToPixels: function (num) {
	return 3 + 37 * num;
    },

    pixelsToGrid: function (num) {
	ret = Math.floor((num - 3) / 37);

	return ret === -1 ? 0 : ret;
    },
};
