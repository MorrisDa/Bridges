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

"use strict";

/*
A = old interval considered
N = new interval

CASE1:	A -----
				N         -----

CASE2:	A         -----
				N -----

CASE3:	A -----
				N   -----

CASE4:	A   -----
				N -----

CASE5:	A ---------
				N   -----

CASE6:	A   -----
				N ---------
*/

function c(newInterval, interval){

	var from = newInterval[0], to = newInterval[1];
	var missing_intervals	= [newInterval.slice()];
	var union = [];
	var newIntervalInserted = false;
	var oldInterval, i;

	//Compute missing_intervals
	for(i=0; i<interval.length; i++){
		oldInterval = interval[i];
		if(oldInterval[0]<=from && from<oldInterval[1]){
			if(oldInterval[1]<to){
				//CASE3
				missing_intervals[0][0] = oldInterval[1];
			}
			else{
				//CASE5
				missing_intervals = [];
				i = interval.length;
			}
		}
		else if(oldInterval[0]>from && oldInterval[0] < to){
			if(oldInterval[1]<to){
				//CASE6: split interval
				missing_intervals[missing_intervals.length-1][1] = oldInterval[0];
				missing_intervals.push([oldInterval[1],to]);
			}
			else{
				//CASE4
				missing_intervals[missing_intervals.length-1][1] = oldInterval[0];
				i = interval.length;
			}
		}
		else if(to<oldInterval[0]){
			//CASE2: break
			i = interval.length;
		}
		//CASE1: continue
	}

	for(i=0; i<interval.length; i++){
		oldInterval = interval[i];
		if(oldInterval[0]<from){
			if(oldInterval[1]<from){
				//CASE1
				union.push(oldInterval);
			}
			else{
				if(oldInterval[1]<to){
					//CASE3
					union.push([oldInterval[0],to]);
				}
				else{
					//CASE5
					union.push(oldInterval);
				}
				newIntervalInserted = true;
			}
		}
		else{
			if(to<oldInterval[0]){
				//CASE2
				if(!newIntervalInserted){
					union.push(newInterval);
				}
				union.push(oldInterval);
				newIntervalInserted = true;
			}
			else{
				if(to<oldInterval[1]){
					//CASE4
					if(newIntervalInserted){
						union[union.length - 1][1] = oldInterval[1];
					}
					else{
						union.push([from,oldInterval[1]]);
					}
				}
				else if(!newIntervalInserted){
					//CASE6
					union.push(newInterval)
				}
			}
			newIntervalInserted = true;
		}
	}
	if(!newIntervalInserted){
		//all intervals are CASE1
		union.push(newInterval);
	}

	return {
		insertion: union,
		intersection: missing_intervals,
	};
}

module.exports = c;
