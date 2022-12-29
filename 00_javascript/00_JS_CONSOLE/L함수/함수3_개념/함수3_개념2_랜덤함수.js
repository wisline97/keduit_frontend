/*
	랜덤함수 만들기
	아래와 같이 함수와 리턴을 사용해서 특정기능으로 모듈화 해서 사용할수있다. 
 */
//기존의 랜덤함수 
//예( 1 ~ 10)
var ran = parseInt(Math.random() * 10 + 1);
console.log(ran);
// 내가 직접만든 랜덤함수 
function myRandom(max) {
	var num = new Date().getTime(); // 현재시간을 가저온다.
	num = num * 1103515245 + 12345;	// 굉장히 큰수를 곱하고 더해준다.
	num = parseInt(num / 65536);	// 적당히큰수로 나눠준다.
	num = num % 32768; 			// 적당히큰수로 나머지를 한다. 
	num = num % max; // 최종적으로 원하는 범위 설정을 한다. 
	return num
}
var myran = myRandom(10);
console.log(myran);