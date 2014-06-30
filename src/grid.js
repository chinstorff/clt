Grid.prototype = {
    var grid,
    var rows: 8,
    var columns: 8,

    init: function () {
	grid = [];
	for (var i = 0; i < columns; i++) {
	    grid[i] = [];
	    for (var j = 0; j < rows; j++) {
		grid[i][j] = '';
	    }
	}
    },

    contentsOf: function (x, y) {
	return grid[x][y];
    },

    set: function (x, y, value) {
	grid[x][y] = value;
    },

    
};
