#Bridge
Function for 

##Example

```javascript
		var interval = [[2, 5], [6, 8]];
		var newInterval = [7, 9];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5], [6,9]]);
		assert.deepEqual(test.intersection, [[8, 9]]);

```