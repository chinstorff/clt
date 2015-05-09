google.load("visualization", "1", {packages:["corechart"]});
//google.setOnLoadCallback(drawChart);

function make2d (rawData) {
    var ret = [];

    for (var i = 0; i < rawData.length; i++) {
	ret.push(["" + i, rawData[i].avg]);
    }

    return ret;
}

function drawChart(rawData) {
    var data = google.visualization.arrayToDataTable(make2d(rawData), true);
    var options = {
        title: 'Sampling Distribution',
        legend: { position: 'none' },
	width: 641,
	height: 401,
    };

    var chart = new google.visualization.Histogram(document.getElementById('sd'));
    chart.draw(data, options);
}
