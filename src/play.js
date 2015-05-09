Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
//	game.input.onDown.add(this.click, this);

	A.grid = new Grid(40, 25);
	A.grid.addPossible('filled');

	game.add.sprite(0, 0, 'grid');

	A.pieces = game.add.group();

	A.queens = [];

	this.paint();
    },

    update: function () {
	if (game.input.mousePointer.isDown) {
	    this.click();
	}
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
	// vertically
	for (var j = y; j < A.grid.rows; j++) {
	    A.grid.addPiece(x, j, 'filled');
	}
    },

    click: function () {
	var x = this.pixelsToGrid(game.input.x);
	var y = this.pixelsToGrid(game.input.y);

	console.log(x + "  " + y);

	this.updateGrid();

	if (!A.grid.contentsOf(x, A.grid.rows - 1)) {
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
	return 16 * num;
    },

    pixelsToGrid: function (num) {
	ret = Math.floor((num - 1) / 16);

	return ret === -1 ? 0 : ret;
    },

    generateDistribution: function () {
	ret = [];

	for (var i = 0; i < A.grid.columns; i++) {
	    for (var j = 0; j < A.grid.rows; j++) {
		if (A.grid.contentsOf(i, j)) {
		    ret.push(i);
		}
	    }
	}

	return ret;
    },

    endPlay: function (num) {
	game.state.start('End');
    },
};
