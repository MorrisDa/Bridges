var assert = require('assert');
var normalize = require('./algo.js');



describe("Recursive Case", function() {


	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [6, 7];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5], [6,7], [10,20]]);
		assert.deepEqual(test.intersection, [[6, 7]]);

	});


	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [5, 10];

		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,20]]);
		assert.deepEqual(test.intersection, [[5, 10]]);

	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [50, 100];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [10,20], [50,100]]);
		assert.deepEqual(test.intersection, [[50, 100]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20], [50, 100]];
		var newInterval = [51, 65];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [10,20], [50, 100]]);
		assert.deepEqual(test.intersection, []);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20], [50, 100]];
		var newInterval = [51, 105];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [10,20], [50, 105]]);
		assert.deepEqual(test.intersection, [[100,105]]);
	});


	it("should return the updated array", function() {
		var interval = [[2, 5]];
		var newInterval = [6, 7];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5], [6,7]]);
		assert.deepEqual(test.intersection, [[6, 7]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [6, 8]];
		var newInterval = [7, 9];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5], [6,9]]);
		assert.deepEqual(test.intersection, [[8, 9]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [6, 8]];
		var newInterval = [7, 9];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5], [6,9]]);
		assert.deepEqual(test.intersection, [[8, 9]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8]];
		var newInterval = [6, 9];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5], [6,9]]);
		assert.deepEqual(test.intersection, [[6, 7], [8,9]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20]];
		var newInterval = [13, 15];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [13,20]]);
		assert.deepEqual(test.intersection, [[13, 15]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20]];
		var newInterval = [13, 15];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [13,20]]);
		assert.deepEqual(test.intersection, [[13, 15]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20]];
		var newInterval = [13, 17];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [13,20]]);
		assert.deepEqual(test.intersection, [[13, 15]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20]];
		var newInterval = [15, 17];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [15,20]]);
		assert.deepEqual(test.intersection, []);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [14, 17];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [14,20], [25,37]]);
		assert.deepEqual(test.intersection, [[14, 15]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [14, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [14,21], [25,37]]);
		assert.deepEqual(test.intersection, [[14, 15], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [14, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [14,21], [25,37]]);
		assert.deepEqual(test.intersection, [[14, 15], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [14, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 8], [14,21], [25,37]]);
		assert.deepEqual(test.intersection, [[14, 15], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [8, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7,21], [25,37]]);
		assert.deepEqual(test.intersection, [[8, 15], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [7, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7,21], [25,37]]);
		assert.deepEqual(test.intersection, [[8, 15], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20], [25,37]];
		var newInterval = [7, 25];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7,37]]);
		assert.deepEqual(test.intersection, [[8, 15], [20, 25]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20]];
		var newInterval = [7, 25];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7,25]]);
		assert.deepEqual(test.intersection, [[8, 15], [20, 25]]);
	});


	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15,20]];
		var newInterval = [7, 14];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 14], [15,20]]);
		assert.deepEqual(test.intersection, [[8, 14]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8]];
		var newInterval = [7, 14];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 14]]);
		assert.deepEqual(test.intersection, [[8, 14]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8]];
		var newInterval = [7, 14];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 14]]);
		assert.deepEqual(test.intersection, [[8, 14]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15, 22]];
		var newInterval = [6, 15];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [6, 22]]);
		assert.deepEqual(test.intersection, [[6, 7], [8, 15]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15, 22]];
		var newInterval = [6, 16];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [6, 22]]);
		assert.deepEqual(test.intersection, [[6, 7], [8, 15]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15, 22]];
		var newInterval = [6, 23];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [6, 23]]);
		assert.deepEqual(test.intersection, [[6, 7], [8, 15], [22, 23]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15, 22], [25, 45]];
		var newInterval = [6, 23];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [6, 23], [25, 45]]);
		assert.deepEqual(test.intersection, [[6, 7], [8, 15], [22, 23]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7, 8], [15, 22]];
		var newInterval = [7, 16];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [7, 22]]);
		assert.deepEqual(test.intersection, [[8, 15]]);
	});

		it("should return the updated array", function() {
			var interval = [[2, 5], [7, 9], [15, 22], [25, 35]];
			var newInterval = [3, 8];
			var test = normalize(newInterval, interval);

			assert.deepEqual(test.insertion, [[2,9], [15, 22], [25, 35]]);
			assert.deepEqual(test.intersection, [[5,7]]);
		});


		it("should return the updated array", function() {
			var interval = [[2, 5], [7, 9], [11, 23]];
			var newInterval = [8, 24];
			var test = normalize(newInterval, interval);

			assert.deepEqual(test.insertion, [[ 2, 5 ], [ 7, 24 ]]);
			assert.deepEqual(test.intersection, [[ 9, 11 ], [ 23, 24 ]]);
		});

		it("should return the updated array", function() {
			var interval = [[2, 5], [7, 9], [13, 15], [19,22], [24,50]];
			var newInterval = [10, 24];
			var test = normalize(newInterval, interval);

			assert.deepEqual(test.insertion, [[2, 5], [7, 9], [10,50]]);
			assert.deepEqual(test.intersection, [[10,13], [15,19], [22,24]]);
		});

		it("should return the updated array", function() {
			var interval = [[2, 5], [7, 9], [13, 15], [19,22], [24,50]];
			var newInterval = [10, 25];
			var test = normalize(newInterval, interval);

			assert.deepEqual(test.insertion, [[2, 5], [7, 9], [10,50]]);
			assert.deepEqual(test.intersection, [[10, 13], [15,19], [22,24]]);
		});




});


describe("Test 1", function() {

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [3, 7];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,7], [10,20]]);
		assert.deepEqual(test.intersection, [[5, 7]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [3, 10];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,20]]);
		assert.deepEqual(test.intersection, [[5, 10]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [3, 11];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,20]]);
		assert.deepEqual(test.intersection, [[5, 10]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5]];
		var newInterval = [3, 11];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,11]]);
		assert.deepEqual(test.intersection, [[5, 11]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5]];
		var newInterval = [3, 5];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,5]]);
		assert.deepEqual(test.intersection, []);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20]];
		var newInterval = [3, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,21]]);
		assert.deepEqual(test.intersection, [[5, 10], [20,21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10,20], [25,30]];
		var newInterval = [3, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,21], [25,30]]);
		assert.deepEqual(test.intersection, [[5, 10], [20,21]]);
	});


	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 15], [21, 30]];
		var newInterval = [1, 20];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2], [5,10], [15,20]]);
	});

	// case [1-2][a-c][]

	// TEST CASE 1-a
	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 15], [16, 30]];
		var newInterval = [1, 20];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,30]]);
		assert.deepEqual(test.intersection, [[1,2], [5,10], [15,16]]);
	});


	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 15], [21, 30]];
		var newInterval = [1, 20];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2], [5,10], [15,20]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 20];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2], [5,10]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 10];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2], [5, 10]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 3];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,5], [10, 20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];

		var newInterval = [1, 2];

		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,5], [10, 20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 50];

		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,50]]);
		assert.deepEqual(test.intersection, [[1,2], [5, 10], [20, 21], [30, 50]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 11];

		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2], [5, 10]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 5];

		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,5], [10, 20], [21, 30]]);
		assert.deepEqual(test.intersection, [[1,2]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [1, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,30]]);
		assert.deepEqual(test.intersection, [[1,2], [5,10], [20, 21]]);
	});


	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [2, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,30]]);
		assert.deepEqual(test.intersection, [[5,10], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [2, 7];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 7], [10, 20], [21, 30]]);
		assert.deepEqual(test.intersection, [[5,7]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [2, 10];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 20], [21, 30]]);
		assert.deepEqual(test.intersection, [[5,10]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [2, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,30]]);
		assert.deepEqual(test.intersection, [[5,10], [20,21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [10, 20], [21, 30]];
		var newInterval = [2, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,30]]);
		assert.deepEqual(test.intersection, [[5,10], [20, 21]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5]];
		var newInterval = [2, 6];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,6]]);
		assert.deepEqual(test.intersection, [[5,6]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5]];
		var newInterval = [1, 6];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,6]]);
		assert.deepEqual(test.intersection, [[1,2], [5,6]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [6,7]];
		var newInterval = [1, 6];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,7]]);
		assert.deepEqual(test.intersection, [[1,2], [5,6]]);
	});

	it("should return the updated array", function() {
		var interval = [[3, 5], [6,7]];
		var newInterval = [1, 2];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,2], [3, 5], [6,7]]);
		assert.deepEqual(test.intersection, [[1,2]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [6,7], [10,15]];
		var newInterval = [1, 8];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1,8], [10,15]]);
		assert.deepEqual(test.intersection, [[1,2], [5,6], [7,8]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [6,8], [10,15]];
		var newInterval = [2, 7];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2,8], [10,15]]);
		assert.deepEqual(test.intersection, [[5,6]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [6,8], [10,15]];
		var newInterval = [2, 4];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 5], [6,8], [10,15]]);
		assert.deepEqual(test.intersection, []);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7,8], [10,15], [16,20]];
		var newInterval = [1, 6];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[1, 6], [7,8], [10,15], [16,20]]);
		assert.deepEqual(test.intersection, [[1,2], [5,6]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7,8], [10,15], [16,20]];
		var newInterval = [2, 16];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 20]]);
		assert.deepEqual(test.intersection, [[5,7], [8,10], [15,16]]);
	});

	it("should return the updated array", function() {
		var interval = [[2, 5], [7,8], [10,15], [16,20]];
		var newInterval = [2, 21];
		var test = normalize(newInterval, interval);

		assert.deepEqual(test.insertion, [[2, 21]]);
		assert.deepEqual(test.intersection, [[5,7], [8,10], [15,16], [20,21]]);
	});

});