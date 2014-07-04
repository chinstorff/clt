Grid = function (columns, rows) {
    this.possible = {
	queen: 'queen',
    },
    this.columns = columns || 8;
    this.rows    = rows    || 8;

    // create empty grid
    this.grid = [];
    for (var i = 0; i < this.columns; i++) {
	this.grid[i] = [];
	for (var j = 0; j < this.rows; j++) {
	    this.grid[i][j] = '';
	}
    }

    contentsOf: function (x, y) {
	return this.grid[x][y];
    },

    addPiece: function (x, y, piece, force) {
	force = force || false;

	if (force) {
	    this.possible[piece] = piece;
	    this.grid[x, y] = piece;
	    return this;
	}

	if (!this.possible[piece] || this.contentsOf(x, y)) {
	    return false;
	}

	this.grid[x, y] = piece;
	return this;
    },

    removePiece: function (x, y) {
	this.grid[x, y] = '';
	return this;
    },

    movePiece: function (oldX, oldY, newX, newY, force) {
	var piece = this.contentsOf(oldX, oldY);
	if (piece) {
	    if (this.addPiece(newX, newY, piece, force)) {
		this.removePiece(oldX, oldY);
		return this;
	    }
	    return false;
	}
	return false;
    },
};
