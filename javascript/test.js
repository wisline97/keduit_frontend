/* // 배열 숫자 오른쪽으로 1칸 밀기
var arr = [3, 1, 2, 5, 6];
var end = arr.length - 1
for (i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) {
        arr[i] = arr[end]
        arr[end] = arr[end - 1]
        end -= 1
        console.log(arr)
    }
} */

// 배열 숫자 왼쪽으로 1칸 밀기
var arr = [3, 1, 2, 5, 6];
for (i = 0; i < arr.length - 1; i++) {
    temp = arr[i + 1]
    arr[i + 1] = arr[i]
    arr[i] = temp
}

console.log(arr)

// 배열 숫자 오른쪽으로 1칸 밀기
var arr = [3, 1, 2, 5, 6];
var end = arr.length - 1
for (i = end; i > 0; i--) {
    temp = arr[i - 1]
    arr[i - 1] = arr[i]
    arr[i] = temp
}

console.log(arr)