<script>
/*
	[문제]

	[학점]
		시험점수(0~100) 을 랜덤으로 저장한다.  
		시험점수에 해당하는 학점을 출력하시오.
		아래는 점수표이다.
		100~91 이면 A학점,
		90~81  이면 B학점,
		80이하는 "재시험"
		단, 만점이거나, A학점과 B학점의 일의 자리가 8점이상이면 + 추가하시오.
	예) 
		100 => A+
		88 ==> B+
		82 ==> B
		23 ==> 재시험
*/

	var 점수 = parseInt(Math.random() * 100) + 1;
	console.log("점수 : " + 점수);
	if (점수 >= 91 && 점수 <= 100){
		var 일 = 점수 % 10;
		if(일 >= 8){
			console.log("A+");
		}
		if(일 < 8){
			console.log("A");
		}
	}
	if (점수 >= 81 && 점수 <= 90){
		var 일 = 점수 % 10;
		if(일 >= 8){
			console.log("B+");
		}
		if(일 < 8){
			console.log("B");
		}
	}
	if (점수 >= 0 && 점수 <= 80){
		console.log("재시험");
	}
</script>