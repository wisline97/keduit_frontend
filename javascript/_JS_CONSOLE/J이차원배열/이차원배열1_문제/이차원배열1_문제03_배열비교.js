/*
    a 배열안 에 b 의 값이 있으면 a 와 b배열안의 값들을 0으로 변경한다. 	
  
*/
var a = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
var b = [10, 2, 54, 90, 50];
var check = false

for (x = 0; x < b.length; x++) {
  for (y = 0; y < a.length; y++) {
    for (z = 0; z < a[y].length; z++) {
      if (b[x] == a[y][z]) {
        b[x] = 0
        a[y][z] = 0
      }
    }
  }
}


console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(b)