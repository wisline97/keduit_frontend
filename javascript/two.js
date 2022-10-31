// var arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++) {
//   var num = arr[i] * arr[i];
//   arr.shift(num);
//   arr.unshift(num);
//   break;
// }

// console.log(arr);

var arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
  var num = arr[i] * arr[i];
  console.log(num);
}

var arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
  var num = arr[i] * arr[i];
  console.log(num);
  arr.push(num);
  break;
}

console.log(arr);

var arr = [1, 2, 3, 4, 5];
var arr2 = [];
for (i = 0; i < arr.length; i++) {
  var num = arr[i] * arr[i];
  console.log(num);
  arr2.push(num);
}

console.log(arr2);

var arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
  var num = arr[i] * arr[i];
  console.log(num);
  arr.push(num);
  console.log(arr);
  continue;
}

// 정답

var arr = [1, 2, 3, 4, 5];
var arr2 = [];
for (i = 0; i < arr.length; i++) {
  var num = arr[i] * arr[i];
  console.log(num);
  arr2.push(num);
}

console.log(arr2);

// 오답
// function solution(angle) {
//   var answer =
//       if(angle>0 && angle<90){
//           return 1;
//       } else if(angle === 90){
//           return 2;
//       } else if(angle > 90 && angle < 180){
//           return 3;
//       } else{
//           return 4;
//       };
//   return answer;
// }

function solution(angle) {
  var answer = 0;

  if (angle > 0 && angle < 90) {
    return (answer = 1);
  } else if (angle == 90) {
    return (answer = 2);
  } else if (angle > 90 && angle < 180) {
    return (answer = 3);
  } else {
    return (answer = 4);
  }

  return answer;
}


new arr = [];
for(i=0; i <= n; i++){
  if(i%2 == 0){
  return arr.push(i)
  }
  
}

var arr = [];
for(i=0; i <= n; i++){
  if(i%2 == 0){
  console.log(i)
  return answer = i

  }
  
}

function solution(n) {
  var arr = [];
  var answer = 0;
  for(i=0; i<=n; i++){
      console.log(i)
      if(i % 2 == 0){
      arr.push(i)
      console.log(arr)
          }
  }
}