# Bridge
Bridge is a simple algorhitm for calculating the missing intervals 

[![codecov](https://codecov.io/gh/MorrisDa/Bridges/branch/master/graph/badge.svg)](https://codecov.io/gh/MorrisDa/Bridges)
[![Build Status](https://travis-ci.org/MorrisDa/Bridges.svg?branch=master)](https://travis-ci.org/MorrisDa/Bridges)

Function for union of intervals.<br/>
Particularly useful for caching temporally sorted data and for calculating the missing intervals.

## Example
```
[1,2,3]
```



### Example 1

```javascript
var f = require('./algo.js')

var interval = [[1, 3], [5, 7], [10, 11]];
var newInterval  = [3, 6];
var newInterval2 = [12, 16];

var call1  = f(newInterval, interval);
var call2  = f(newInterval2, interval);

console.log(interval) //the resulting intervals -> [[1,7], [10,11], [12, 16]];
console.log(call1.intersection) //the missing intervals -> [[3, 5]];
console.log(call2.intersection) //the missing intervals -> [[12, 16]];

```

###Exemple 2

```javascript
var f = require('./algo.js')

var interval = [[2, 5], [6, 8]];
var newInterval = [7, 9];
var test = f(newInterval, interval);

console.log(interval) //the resulting intervals -> [[2,5], [6,9]];
console.log(test.intersection) //the missing intervals -> [[5, 6], [8, 9]];

```
###Exemple 3

```javascript
var f = require('./algo.js')

var interval = [[1, 9], [11, 15], [19, 31]];
var newInterval = [7, 10];
var test = f(newInterval, interval);

console.log(interval) //the resulting intervals -> [[1,10], [11, 15], [19, 31]];
console.log(test.intersection) //the missing intervals -> [[9, 10]];

```

##Tests
Simply run ```npm test``` after installing dev dependencies. Coverage of tests is 100%.


##Notes
The function doesn't create any new object, so that the ```interval``` array parameter (passed by reference) will be modified by function's call, resulting as the updated intervals. 
