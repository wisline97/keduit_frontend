<script>
/*
	랜덤배열 
	원하는 크기의 배열에 1~크기만큼의 숫자를 랜덤으로 중복없이 만들어서 리턴해주는 함수를 만들어보자.
 */
 	function myRandom(max){
		var num = new Date().getTime(); // 현재시간을 가저온다.
		num = num * 1103515245 + 12345;	// 굉장히 큰수를 곱하고 더해준다.
		num = parseInt(num/65536) % 32768;	// 큰수로 나눠주고 나머지를 한다. 
		num = num % max; // 최종적으로 범위 설정을 한다. 
		return num
	}
	function randomArr(max){
		var arr = [];
		for(var i = 0; i < max; i++){
			arr[i] = i + 1;
		}
		for(var i = 0; i < 1000; i++){
			var ran = myRandom(max);
			console.log(ran);
			var temp = arr[ran];
			arr[ran] = arr[0];
			arr[0] = temp;
		}
		return arr
	}
	var arr = randomArr(10);
	console.log(arr);

</script>