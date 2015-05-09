
makeHistogram = function (a, sizeOfSample, numOfSamples) {
    console.log("make histogram");

    a = a                       || Game.Play.prototype.generateDistribution();
    sizeOfSample = sizeOfSample || 7;
    numOfSamples = numOfSamples || 200


    a = run(a, sizeOfSample, numOfSamples);

    drawChart(a);
}

reset = function () {
    Game.Play.prototype.reset();
}
