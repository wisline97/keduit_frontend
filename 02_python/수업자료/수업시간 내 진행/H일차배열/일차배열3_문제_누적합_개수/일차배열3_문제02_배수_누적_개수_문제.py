'''
    [문제]
        [조건1] 배열에 랜덤숫자(1~100) 5개를 추가하고,
        [조건2] 짝수만 출력하시오.
        [조건3] 짝수의 누적 합을 저장 후 출력하시오.
        [조건4] 짝수의 개수를 출력하시오.
    
    [예시]
        arr = [68, 81, 84, 72, 81]
        68
        84
        72

        개수 = 3
        합 = 224
'''

import random

arr = []

for i in range(5):
    num = random.randint(1,100)
    arr.append(num)

print("배열 arr :",arr)

total = 0
count = 0
print("배열 arr의 짝수 :", end = " ")

for y in range(len(arr)):
    if arr[y] % 2 == 0:
        print(arr[y], end=" ")
        count += 1
        total += arr[y]
print()
print("배열 arr 짝수 합계 :",total)
print("배열 arr 짝수 개수:",count)