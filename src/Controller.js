Controller = {};

Controller.makeHistogram = function (a, sizeOfSample, numOfSamples) {
    a = a || Game.Play.prototype.generateDistribution();

    a = run(a, sizeOfSample, numOfSamples);

    drawChart(a);
}
