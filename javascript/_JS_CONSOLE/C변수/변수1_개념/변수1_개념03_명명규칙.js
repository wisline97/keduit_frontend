/*  
	[1] 변수의 명명규칙
		  (1) 변수의 이름은 숫자로 시작할 수 없다.
		  	(예) 
		  		var 8a; (x) 
		  	
		  (2) 변수의 이름에 특수문자는 _, $만을 허용한다.
		  	(예) 
		  		var _a; (o)
		  	 	var $a; (o)
		  	
		  (3) 예약어(키워드)는 사용할 수 없다. 
		  	(예) 
		  		var public(x) 
		  	 	var class(x) 
		  	 	var static(x) 
		  	 	...
		  	
		  (4) 자바는 알파벳의 대소문자를 구분한다. 아래 두변수는 서로 다르다. 	 
		  	(예) 
		  		var a; 
		  		var A; 
		  		
		  (5) 변수는 일반적으로 소문자로 사용한다. 
*/
var test = 1; // 변수는 대소문자를 구분한다.
var Test = 2;
console.log(test);
console.log(Test);

var $money = 1000; // 특수문자 $ 사용가능
var _money = 2000; // 특수문자 _ 사용가능
console.log($money);
console.log(_money);

// int 1num = 10;  // 변수이름은 숫자로 시작할수없다.
// int #test = 10;  // 특수기호 대부분 사용할수없다.
// int void = 20; // 예약어 사용할수없다.

var math_score = 35; // 첫번째 단오와 두번째 단어사이를  _ 로 구분하는것 (스네이크표기법)
var koreanScore = 87; // 첫번째 단어는 소문자로 두번째 단어 첫글자를 대문자로 하는것 (카멜표기법)
console.log(math_score);
console.log(koreanScore);
