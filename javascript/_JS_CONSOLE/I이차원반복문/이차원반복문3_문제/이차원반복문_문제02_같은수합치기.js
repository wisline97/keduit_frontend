
/*
		input = {8,4,2,2,4,4,8};	
  
	 [1] input 의 데이터를 순차적으로 a에 저장한다.
	 [2] 저장할려는 수와 그앞의 수가 서로같으면 합친다. (계속 중첩적용)
	 input = {8,4,2,2,4,4,8}	
	 8  ==> a[] =  {8}
	 4  ==> a[] =  {8,4}
	 2  ==> a[] =  {8,4,2}
	 2  ==> a[] =  {8,4,2,2} ==> {8,4,4} ==> {8,8} ==> {16}
	 4 ==>  a[] =  {16,4} 
	 4  ==> a[] =  {16,4,4} ==> {16,8}
	 8  ==> a[] =  {16,8,8} ==> {16,16} ==> {32}	
 */
var input = [8, 4, 2, 2, 4, 4, 8];
var a = [0, 0, 0, 0, 0, 0, 0];

for (i = 0; i < a.length; i++) {
	for (j = i + 1; j < input.length; j++) {
		if (input[i] == input[j]) {
			a[i] = input[i] + input[j]
		} else {
			a[i] = input[i]
		}
	}
}

console.log(a)

for (i = 0; i < a.length; i++) {
	for (j = i + 1; j < input.length; j++) {
		if (a[i] == a[j]) {
			a[i] = a[i] + a[j]
			a[j] = 0
		} else {
			a[i] = a[i]
		}
	}
}


console.log(a)

for (i = 0; i < a.length; i++) {
	for (j = i + 1; j < input.length; j++) {
		if (a[i] == a[j]) {
			a[i] = a[i] + a[j]
			a[j] = 0
		} else {
			a[i] = a[i]
		}
	}
}


console.log(a)

for (i = 0; i < a.length; i++) {
	for (j = i + 1; j < input.length; j++) {
		if (a[i] == a[j]) {
			a[i] = a[i] + a[j]
			a[j] = 0
		} else {
			a[i] = a[i]
		}
	}
}


console.log(a)