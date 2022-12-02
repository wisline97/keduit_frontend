/*
   [문제] d의 값을 순차적으로 e에저장후 , 남은값은 f에 저장한다. 
   [예]
         var d = [10,20,30,40,50,60];
         e = [10,20,30]
         f = [40,50,60];
     
 */

var d = [10, 20, 30, 40, 50, 60];
var e = [0, 0, 0];
var f = [0, 0, 0];

var idx = d.length - 1
var y = 0
for (i = 0; i <= idx; i++) {
      if (i < e.length) {
            e[i] = d[i]
      }
      if (i >= e.length) {
            f[y] = d[i]
            y += 1
      }
}

console.log(e)
console.log(f)