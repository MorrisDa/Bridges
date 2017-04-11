/* The MIT License (MIT)

// Copyright (c) 2017 Daniele Tomasi, Alessio Vitella.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.  
*/



function c(newInterval, intervals, index) {

	"use strict";

	var from	= newInterval[0],
			to		= newInterval[1];

	var starting_index	= index || 0;
	var current					= intervals[starting_index];
	var new_intervals		= [];


	//Case 1 (the new interval lies before the first interval)
	if (from < current[0]) {
		//the new interval begins before the beginning of the existing interval

		//set the first unused left extremis
		new_intervals[0] = [from]; //alias of new_intervals[0][0]

		if (to < current[0]) {
			//the new interval ends before the beginning of the existing interval
			
			//shift positions
			for (var u = intervals.length; u > starting_index; u--) {
				intervals[u] = intervals[u - 1];
			}

			//prepend the new interval
			intervals[starting_index] = [from, to];

			//set the first unused right extremis
			new_intervals[0][1] = to;

		} else if (to == current[0]) {
			//the new interval ends where the existing interval starts
			//simply join the interval
			current[0] = from;

			//set the first unused right extremis as right extremis of current inteval
			new_intervals[0][1] = to;

		} else {

			//close first left interval
			new_intervals[0][1] = current[0]

			if (to <= current[1]) {
				//the new interval ends befoe the end of the current interval
				//set beginning of current interval as beginning of the new interval
				current[0] = from;

			} else {

				if (intervals.length - 1 == starting_index) {

					new_intervals[1] = [current[1], to];
					//set the right interval of the current interval
					//set the right of the right added interval 
					current[0] = from;
					current[1] = to;
				}

				//the new interval ends over the existing interval
				for (var i = 1 + starting_index; i < intervals.length; i++) {
						
					//open new extremis
					if (to < intervals[i][0]) {

						if (!new_intervals[new_intervals.length - 1][1]) {
							new_intervals[new_intervals.length - 1][1] = to;
						} else {
							new_intervals.push([intervals[i-1][1], to]);
						}
						
						//if the interval ends before the beginning of the next interval
						//set beginning of current interval as beginning of the new interval
						current[0] = from;

						//set end of current interval as the end of the new interval
						//set the right of the right added interval 
						current[1] = to;
						//end cycle;
						break;
					} else if (to === intervals[i][0]) {

						if (!new_intervals[new_intervals.length - 1][1]) {
							new_intervals[new_intervals.length - 1][1] = to;
						} else {
							new_intervals.push([intervals[i-1][1], to]);
						}

						//if the new interval ends on the beginning of the next interval
						//set beginning of current interval as beginning of the new interval
						current[0] = from;
						//set the end of current interval as the end of the next interval
						current[1] = intervals[i][1];
						//remove next interval since it is now included in current interval
						intervals.splice(i, 1);
						break;
					} else {

						if (!new_intervals[new_intervals.length - 1][1]) {
							new_intervals[new_intervals.length - 1][1] = intervals[i][0];
						} else {
							new_intervals.push([intervals[i-1][1], intervals[i][0]]);
						}

						//the end of the new interval is over the beginning of the next interval
						if (to <= intervals[i][1]) {

							//the end of the new interval is before the end of the next interval
							//set beginning of current interval as beginning of the new interval
							current[0] = from;
							//set the end of current interval as the end of the next interval
							current[1] = intervals[i][1];

							//remove next interval since it is now included in current interval
							intervals.splice(i, 1);
							break;
						} else {

							new_intervals.push([intervals[i][1]]);

							//add a new interval
							intervals.splice(i, 1);

							//the end of the new interval is over the end of the next interval
							if (i === intervals.length) {
								//the new interval goes over the last interval, so set the current as the new;
								current[0] = from;
								current[1] = to;

								new_intervals[new_intervals.length - 1][1] = to;

							} else {
								//otherwise decrease i to analyze next element (since one was removed);
								i--;
							}
						}
					}
				}
			}
		}
	} else  if (from === current[0]) {

			if (to <= current[1]) {
				//the new interval ends befoe the end of the current interval
				//set beginning of current interval as beginning of the new interval
				current[0] = from;

			} else {

				if (intervals.length - 1 == starting_index) {
					//set the right interval of the current interval
					//set the right of the right added interval 
					new_intervals[0] = [current[1], to];
					current[1] = to;
				} else {
					//otherwise we set the interval beginning to the end of current interval
					new_intervals[0] = [current[1]];
				}

				//the new interval ends over the existing interval
				for (var i = 1 + starting_index; i < intervals.length; i++) {
						
					//open new extremis
					if (to < intervals[i][0]) {

						new_intervals[new_intervals.length - 1][1] = to;

						
						//if the interval ends before the beginning of the next interval
						//set beginning of current interval as beginning of the new interval
						current[0] = from;

						//set end of current interval as the end of the new interval
						//set the right of the right added interval 
						current[1] = to;
						//end cycle;
						break;
					} else if (to === intervals[i][0]) {

						new_intervals[new_intervals.length - 1][1] = to;

						//if the new interval ends on the beginning of the next interval
						//set beginning of current interval as beginning of the new interval
						current[0] = from;
						//set the end of current interval as the end of the next interval
						current[1] = intervals[i][1];
						//remove next interval since it is now included in current interval
						intervals.splice(i, 1);
						break;
					} else {

						new_intervals[new_intervals.length - 1][1] = intervals[i][0];

						//the end of the new interval is over the beginning of the next interval
						if (to <= intervals[i][1]) {

							//the end of the new interval is before the end of the next interval
							//set beginning of current interval as beginning of the new interval
							current[0] = from;
							//set the end of current interval as the end of the next interval
							current[1] = intervals[i][1];

							//remove next interval since it is now included in current interval
							intervals.splice(i, 1);
							break;
						} else {

							//set the interval beginning to the end of current interval
							new_intervals.push([intervals[i][1]]);

							//add a new interval
							intervals.splice(i, 1);

							//the end of the new interval is over the end of the next interval
							if (i === intervals.length) {
								//the new interval goes over the last interval, so set the current as the new;
								current[0] = from;
								current[1] = to;

								//set the end of interval to end of new interval, since there are not more intervals
								new_intervals[new_intervals.length - 1][1] = to;

							} else {
								//otherwise decrease i to analyze next element (since one was removed);
								i--;
							}
						}
					}
				}
			}
	} else {
		//the new interval start after the beginning of the first interval

		if (from <= current[1]) {
			//the new interval start inside the first interval
			if (to <= current[1]) {
				//don't do anything, since new interval is included in first interval
			} else {
				//to > current[1]
				//set new interval beginning on the right extremis of the first interval
				if (intervals.length - 1 == starting_index) {
					//set the right interval of the current interval
					//set the right of the right added interval 
					new_intervals[0] = [current[1], to];
					current[1] = to;
				} else {
					//otherwise we set the interval beginning to the end of current interval
					new_intervals[0] = [current[1]];
				}

				//find where it goes
				for (var r = 1 + starting_index; r < intervals.length; r++) {

					if (to < intervals[r][0]) {
						//if new interval ends before the beginning od next interval
						
						new_intervals[new_intervals.length - 1][1] = to;

						//set the end of current interval to the end of new interval
						current[1] = to;

					} else if (to == intervals[r][0]) {

						new_intervals[new_intervals.length - 1][1] = to;

						//set the end of current interval as the end of the next interval
						current[1] = intervals[r][1];
						//remove next interval since it is now included in current interval
						intervals.splice(r, 1);
					} else {
						//to > beginning of the next interval
						new_intervals[new_intervals.length - 1][1] = intervals[r][0];

						//the end of the new interval is over the beginning of the next interval
						if (to <= intervals[r][1]) {

							//set the end of current interval as the end of the next interval
							current[1] = intervals[r][1];

							//remove next interval since it is now included in current interval
							intervals.splice(r, 1);
							break;
						} else {

							new_intervals.push([intervals[r][1]]);

							//add a new interval
							intervals.splice(r, 1);

							//the end of the new interval is over the end of the next interval
							if (r === intervals.length) {

								current[1] = to;

								new_intervals[new_intervals.length - 1][1] = to;

							} else {
								//otherwise decrease i to analyze next element (since one was removed);
								r--;
							}
						}

					}
				}
			}

			
		} else {
			//from begins after the end of the first 
			if (intervals.length - 1 == starting_index) {
				intervals.push([from, to]);
				new_intervals.push([from, to]);
			} else {
				var recursiveCall = c(newInterval, intervals, starting_index + 1);
				new_intervals = recursiveCall.intersection;
				intervals     = recursiveCall.insertion;
			}
		}
	}


	return {
		insertion			: intervals,
		intersection : new_intervals,
	};

}

module.exports = c;