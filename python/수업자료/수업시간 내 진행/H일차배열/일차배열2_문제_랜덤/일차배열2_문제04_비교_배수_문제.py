'''
    [문제]
        [조건1] 리스트에 랜덤 숫자(1~100) 다섯 개를 추가한다.
        [조건2] 위 값 중에 5의 배수들만 출력하시오.
    [예시]
        arr = [70, 87, 61, 4, 81]
        70
'''
import random

arr = []

i = 1

for i in range(5):
    num = random.randint(1,100)
    arr.append(num)

print(arr)

y = 0
count = 0

for y in range(len(arr)):
    if arr[y]%5==0:
        print(arr[y])
    else:
        count += 1

    if count == len(arr):
        print("해당 배열 안에서 5의 배수를 찾을 수 없습니다.")
