#Bridge
Function for union of intervals.<br/>
Particularly useful for caching temporally sorted data and for calculating the missing intervals.

##Example


```A``` = 1-2-3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5-6-7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10-11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+<br/>
```B``` = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3-4-5-6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12-16&nbsp;=<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------------------------------<br/>
```I```	=	1-2-3-4-5-6-7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10-11&nbsp;&nbsp;12-16&nbsp;<br/>
```C``` = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3-4-5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12-16

```A``` is a given ordained set of intervals, ```B``` is an interval we want to add to our set ```A```. <br/>
```I``` is the result of the operation ```A``` U ```B ```. <br/>
```C``` is the set of intervals resulting from the operation ```I``` - ```A``` (the missing intervals added to ```A``` from ```B``` to obtain ```I```).<br/>

In code, it will be: <br/>

###Exemple 1

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
console.log(test.intersection) //the missing intervals -> [[8, 9]];

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