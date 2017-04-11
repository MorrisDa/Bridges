/*
The MIT License (MIT)
Copyright (c) 2017 Daniele Tomasi, Alessio Vitella
morris@morrisda.com
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
