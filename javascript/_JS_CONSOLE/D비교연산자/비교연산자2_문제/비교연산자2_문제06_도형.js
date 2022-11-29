/*
	[설명]
  		사각형가로는 7이다. 
	 	사각형가로는 삼각형가로와 같다. 
	 	삼각형 가로는 삼각형 세로보다 2크다.	   	 
	 	삼각형 넓이 3개의 합이 사각형의 넓이와 같다. 
	[문제]
		위 식을 표현하고, 풀이과정을 주석으로 작성하시오.
*/

/* 
삼각형 넓이 3개의 합 = 52.5
사각형 가로 = 7
사각형 세로 = a

7*a = 52.5
7*a = 525/10
a = (525/10)*1/7
a = (525*1)/(10*7)
a = 525 / 70
a = 7.5
*/

let sqGaro = 7;
let triGaro = 7;
let triSero = triGaro - 2;
let triArea = triGaro * triSero * (1 / 2);
let sqSero = (triArea * 3) / 7;
let sqArea = sqGaro * sqSero;

console.log(triArea * 3 == sqArea);
