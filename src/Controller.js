
makeHistogram = function (a, sizeOfSample, numOfSamples) {
    a = a                       || Game.Play.prototype.generateDistribution();
    sizeOfSample = sizeOfSample || +document.getElementById("SoS").value;
    numOfSamples = numOfSamples || +document.getElementById("NoS").value;


    a = run(a, sizeOfSample, numOfSamples);

    drawChart(a, numOfSamples);
}

reset = function () {
    Game.Play.prototype.reset();
}
