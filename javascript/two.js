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
