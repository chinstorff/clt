/**
 * New node file
 */




//NEW CODE:


//run([1,31,1,3,4,3,312,4,5,3,1,2,4,1,23,2,1,3,4,5,4,6,7,4,2,4,1,23,312,3,244,1], 10, 100);

//Chris, u put stuffs here :)
function run(inputIntArray, sizeOfSample, numOfSamples)
{
	samplesChosen = chooseRandomSamples(inputIntArray.length, sizeOfSample, numOfSamples);
	
	retval = [];
	for(j = 0; j < samplesChosen.length; j++)
		{
		sample = samplesChosen[j];
		
		//values = [];
		tot = 0;
		for(i = 0 ; i < sample.length; i++)
			{
			//values.push(inputIntArray[sample[i]]);
			tot += inputIntArray[sample[i]];
			}
		avg = tot/sample.length;
	
		retval.push({indexes:sample, avg:avg}); //,values:values});
		}
	
	//console.log(retval);
	return retval;
}

function chooseRandomSamples(n, m, numSamples)
{
	
	samples = [];
	values = [];
	
	nCm = factorial(n)/(factorial(m)*factorial(n-m));
	if(numSamples>nCm)
		{
		console.log("Truncating num samples to: " + nCm);
		numSamples = nCm;
		}
	
	while(samples.length < numSamples)
		{

		sampleIndexes = new Array(m);
		for(i = 0; i < m; i++)
			{
			num = truncate(Math.random()*n);
			if(sampleIndexes.indexOf(num)==-1)
			sampleIndexes[i]=num;
			else
				i--;
			}
		
		value = 0;
		for(i = 0; i < m; i++)
			{
			value+=Math.pow(2, sampleIndexes[i]);
			}
		
		//console.log(sampleIndexes, value, binaryIndexOf(value, values));
		if(binaryIndexOf(value, values)!=-1)
			{
			continue;//no good
			}
		
		samples.push(sampleIndexes);
		values = insert(value, values);
		
		
		}
	return samples;
}
function factorial(x)
{
if(x == 0) return 1;
return x*factorial(x-1);
}

//http://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript
function truncate(value)
{
    if (value < 0)
        return Math.ceil(value);

    return Math.floor(value);
}

//http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/
function binaryIndexOf(searchElement, searchArray) {
    'use strict';
 
    var minIndex = 0;
    var maxIndex = searchArray.length - 1;
    var currentIndex;
    var currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = searchArray[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
}


//http://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers
function insert(element, array) {
	  array.splice(locationOf(element, array) + 1, 0, element);
	  return array;
	}

	function locationOf(element, array, start, end) {
	  start = start || 0;
	  end = end || array.length;
	  var pivot = parseInt(start + (end - start) / 2, 10);
	  if (end-start <= 1 || array[pivot] === element) return pivot;
	  if (array[pivot] < element) {
	    return locationOf(element, array, pivot, end);
	  } else {
	    return locationOf(element, array, start, pivot);
	  }
	}


//OLD CODE:
x = y = z = 0;

function turnOnWhat(n, m)
//n = size of the original array (the data)
//m = grouping size
{
	
	p = new Array(n+2);
	p[0] = n+1;
	
	for(i = 1; i != n-m+1; i++)
	    p[i] = 0;
	  while(i != n+1)
	    {
	    p[i] = i+m-n;
	    i++;
	    }
	  p[n+1] = -2;
	  
	  b = new Array(n);
	  for(i = 0; i != n-m; i++)
	    {
	    b[i] = 0;
	    }
	  while(i != n)
	    {
	    b[i++] = 1;
	    }

	  l = 1;
	  console.log(b);
	  while(!mixUp(p))
		  {
		  b[x] = 1;
		  b[y] = 0;
		  console.log(b);
		  l++;
		  }
	  
	  console.log(l);
	  
}

function mixUp(p)
  {
  i = j = k = 0;
  j = 1;
  while(p[j] <= 0)
    j++;
  if(p[j-1] == 0)
    {
    for(i = j-1; i != 1; i--)
      p[i] = -1;
    p[j] = 0;
    x = z = 0;
    p[1] = 1;
    y = j-1;
    }
  else
    {
    if(j > 1)
      p[j-1] = 0;
    do
      j++;
    while(p[j] > 0);
    k = j-1;
    i = j;
    while(p[i] == 0)
      p[i++] = -1;
    if(p[i] == -1)
      {
      p[i] = p[k];
      z = p[k]-1;
      x = i-1;
      y = k-1;
      p[k] = -1;
      }
    else
      {
      if(i == p[0])
	return true;
      else
	{
	p[j] = p[i];
	z = p[i]-1;
	p[i] = 0;
	x = j-1;
	y = i-1;
	}
      }
    }
  return false;
  }


function sortNumber(a,b) {
    return a - b;
}
console.log(processInput("Content-Type: text/plain\n\n123\n32\n99 3 1 21 , 321,3,21,5"));

function processInput(postdata)//postdata is input data from the button
{
	var xSize = 25;//grid size
	postdata = postdata.substring(postdata.indexOf("Content-Type: text/plain")+"Content-Type: text/plain".length+2);//+2 is for 2 enters
	//console.log(postdata);
	endIndex = postdata.indexOf("-");
	if(endIndex!=-1)//must do substring in 2 runs b/c "-" also appears in begining
		postdata = postdata.substring(0, endIndex-2);
	//console.log(postdata);
	postdata = postdata.replace(/(\r\n|\n|\r)/gm," ")//new line = space
	//console.log(postdata);
	entries = postdata.split(/[ ,]+/);//split by commas or spaces
	//console.log(entries);
	entries = entries.map(Number);//convert strings to numbers
	//console.log(entries);
	entries.sort(sortNumber);//sort min to max
	//console.log(entries);
	
	if(entries.length<2)return {"success":false, reason:"less than 2 data elements inputed"};
	
	min = entries[0];
	max = entries[entries.length-1];
	
	range = max - min;
	scale = range/xSize;
	console.log(scale);
	
	returnValue = new Array(xSize+1);
	for(i = 0; i < returnValue.length; i++)
		{
		returnValue[i]=0;
		}
	
	for(i = 0; i < entries.length; i++)
		{
		entry = entries[i];
		closestX = truncate((entry-min)/scale);
		returnValue[closestX] +=1;
		}
	
	
	
	return {xyVals: returnValue, entries:entries};
	
	
}


