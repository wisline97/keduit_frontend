/*
	
	 1. 산술 연산자
		1) 더하기		    10 + 3
		2) 빼기			    10 - 3
		3) 곱하기			10 * 3
		4) 나누기			10 / 3
		5) 나머지			10 % 3
		6) 몫 			parseInt(10/3)	
		
	 */

// 1. 숫자(정수) : 소수점이 없는 수 : 10 , -1  , 123123
console.log("[산술연산자] +  -  *  /  %  ");
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);

// 2. 소수점 처리
console.log("[소수점처리]");
// 2-1 소수점제거 (몫만구하기)
//	   parseInt(식)
console.log(parseInt(10 / 3));
// 2-2 소수점 자리수 제한
//    (식).toFixed(소수점자리수);
console.log((10 / 3).toFixed(2));
