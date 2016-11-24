#Bridge
Function for union and intersection of intervals.

Particularly useful for caching temporally sorted data.

##Example



var a = 1-2-3  	5-6-7     10-11 +
var b = 		3-4-5								=
				_________________________

a + b	=	1-2-3-4-5-6-7			10-11
a E* b = 		3-4-5


var a = 1-2-3-4-5-6-7     	 11-12-13-14-15-16-17 18-19	+
var b = 						7-8-9-10-11		 13-14								=
				_________________________________________________
				
a + b	=	1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17 18-19
a E* b = 						7-8-9-10-11


*The eughen operation is a big deal. 


```javascript
var f = require('./algo.js')

var interval = [[2, 5], [6, 8]];
var newInterval = [7, 9];
var test = f(newInterval, interval);

console.log(test.insertion) //the resulting intervals -> [[2,5], [6,9]];
console.log(test.intersection) //the missing intervals -> [[8, 9]];

```

```javascript
var f = require('./algo.js')

var interval = [[1, 9], [11, 15], [19, 31]];
var newInterval = [7, 9];
var test = f(newInterval, interval);

console.log(test.insertion) //the resulting intervals -> [[2,5], [6,9]];
console.log(test.intersection) //the missing intervals -> [[8, 9]];

```


##Notes
The function doesn't create any object, so that the ```interval``` array parameter will be modified by function call, resulting as the updated intervals (insertion)