/*
	숫자(10~50) 한개를 랜덤으로 저장하고 
  배열안에서 그숫자보다 작은값들의 합을 출력 
	
	예) 34
	결과) 10,20,30 ==> 60

  */
var array = [10, 20, 30, 40, 50];
let idx = array.length
let num = parseInt(Math.random() * 41) + 10
let total = 0

for (i = 0; i < idx; i++) {
	if (array[i] < num) {
		total += array[i]
	}
}

console.log("랜덤숫자는", num)
console.log("랜덤숫자보다 작은 숫자들의 합은", total)