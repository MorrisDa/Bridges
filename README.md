#Bridge
Function for union and intersection of intervals. Particularly useful for caching temporally sorted data.

##Example


```javascript
var interval = [[2, 5], [6, 8]];
var newInterval = [7, 9];
var test = normalize(newInterval, interval);

console.log(test.insertion) //the resulting intervals -> [[2,5], [6,9]];
console.log(test.intersection) //the missing intervals -> [[8, 9]];

```


##Notes
The function doesn't create any object, so that the ```interval``` array parameter will be modified by function call, resulting as the updated intervals (insertion)