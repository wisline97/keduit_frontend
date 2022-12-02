/*
   var arr = [1,1,1,3,3,3,3,2,2,3,3,3,4,5];	
   arr1에 중복되는 숫자는 제외하고 숫자 1개씩만 압축해서 
   b에 저장하려고 한다.
   [예] 
            b[] = [1,3,2,3,4,5];


 */
var arr = [1, 1, 1, 3, 3, 3, 3, 2, 2, 3, 3, 3, 4, 5];
var b = [];
let idx = arr.length - 1
let y = 0
let check = false
for (i = 0; i <= idx; i++) {
   if (i < idx) {
      if (arr[i] == arr[i + 1]) {
         check = true
      }
      else {
         check = false
      }
   }
   if (check == false) {
      b[y] = arr[i]
      y += 1
   }
}
console.log(b)


