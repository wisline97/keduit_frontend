/*
  	[문제]
  		과일상점에 과일 250개가 있다. 
  		그중에 오전에 120개가 팔렸고 오후에는  80개가 팔렸다.
  		남은 과일는 전체 과일의 몇퍼센트인지 구하시오.
  		
  	[정답] 
  		20
 */

let total = 250;
let morning = 120;
let afternoon = 80;

let rest = total - morning - afternoon;

let percent = (100 / 250) * rest;

console.log(percent, "%");
