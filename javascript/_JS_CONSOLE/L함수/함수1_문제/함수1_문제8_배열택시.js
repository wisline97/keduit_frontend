
/*
	  [테스트]
 	
	  현재 택시는 5 , 5 위치에 있다.
	  dir 배열은 뱡향을 뜻하고 0 , 1, 2 ,3 은 북 , 동 , 남 , 서를 뜻한다. 
 	
	  speed 배열은 속도를 뜻한다.
 	
	  dir 과 speed 배열은 택시가 매번이동한 내용을 기록한것이다. 
 	
	  예) 처음에 dir 이 0 이니 북쪽을 뜻한다. 
		 speed 는 4 이므로, y가 4증가해  x : 5 , y : 9 가된다.  
		 
		 두번째는 dir 이 2 이니 남을 뜻하고, speed 는 2 이므로 
		 y 가 2감소해  x : 5 , y : 7 이된다. 
		 
		 6번 모두 이동한후 택시의 위치를 출력하시오. 
 */
var speed = [4, 2, 1, 5, 4, 2];
var dir = [0, 1, 3, 2, 2, 1];
var x = 5;
var y = 5;

// a = speed
// b = dir

function taxi(a, b) {
	for (i = 0; i < speed.length; i++) {
		if (b[i] == 0) {
			y += a[i]
		}
		if (b[i] == 1) {
			x += a[i]
		}
		if (b[i] == 2) {
			y -= a[i]
		}
		if (b[i] == 3) {
			x -= a[i]
		}
	}
}

taxi(speed, dir)
console.log(x, y)