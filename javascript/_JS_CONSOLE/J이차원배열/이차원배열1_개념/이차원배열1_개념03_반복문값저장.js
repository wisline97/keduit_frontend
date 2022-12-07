/*
*/

var arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]];
var k = 10;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        arr[i][j] = k;
        k += 10;
    }
}
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);