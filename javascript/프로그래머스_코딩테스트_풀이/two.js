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
      if(i % 2 == 0){
      arr.push(i);
      console.log(arr);
      }

      for(a = 0; a<=arr.length; a++){
      answer += arr[a];
          }
  }
  console.log(answer);
}

var arr = [];
var answer = 0;

function solution(n) {
  for(i=0; i<=n; i++){
      if(i % 2 == 0){
      arr.push(i);
      console.log(arr);
      }
  }
  for(a = 0; a<=arr.length; a++){
    answer += arr[a];
    console.log(answer);
  }
}


var arr = [];
var answer = 0;

function solution(n) {
  for(i=0; i<=n; i++){
      if(i % 2 == 0){
      arr.push(i);
      console.log(arr);
      }
  }
  for(a = 0; a<arr.length; a++){
    console.log(a)
    answer += arr[a];
    console.log(answer);
  }
}

console.log(answer);



function solution(array, n) {
  var answer = 0;
  for(i = 0; i<array.length; i++){
    if(array[i] == n){
      answer = answer + 1;
    }
  }
}


function solution(numbers) {
  var answer = 0;
  var max = 0;
  for(i=0; i<numbers.length; i++){
      for(a=1; a<numbers.length; a++){
          console.log(numbers[i],numbers[a])
          if(numbers[i]<numbers[a]){
            console.log(numbers[a])
          } else{
            console.log(numbers[i])
          }
      }

  }
  return answer;
}

function solution(numbers) {
  console.log(numbers)
  numbers.sort(a -b)
  console.log(numbers)
}