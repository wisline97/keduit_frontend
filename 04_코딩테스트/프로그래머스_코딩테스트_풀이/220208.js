/* array.sort(function(a,b){return a-b});
diff = [];

for(let i=0; i<array.length; i++){
    if(array[i] > n){
        diff.push(array[i] - n);
    } else if(n >= array[i]){
        diff.push(n-array[i]);
    }
}

var min = Math.min(...diff);
var minIdx = diff.indexOf(min)
console.log(minIdx, "minIdx")

answer = array[minIdx];    

console.log(diff);
console.log(answer); */


var numbers = "oneonefourzerosixseven"
const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    //변수명을 헷갈리게 지어서 numbers.length까지 했었다.. 변수명도 잘 지어야겠다.. 😂
    for(let i = 0; i < num.length; i++){
      //split을 num[i] 기준으로 자르고 잘린곳을 i로 메꿔주는 방식(?)이다.
        numbers = numbers.split(num[i])
        console.log(numbers, ",", i)
        numbers = numbers.join(i)
        console.log(numbers, ",", i)

    }
