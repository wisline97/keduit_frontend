'''
    [문제]
        [조건1] 리스트에 랜덤숫자(1~100) 5개를 추가한다.
        [조건2] 리스트의 숫자중 50보다 큰값들만 출력
        [조건3] 위조건의 값들의 누적합을 출력
        [조건4] 위조건의 개수 출력 
       
    [예시]
        a = [1, 83, 22, 77 ,19]
        비교 = 50
        출력 : 83, 77
        합 : 160
        개수 : 2
'''

import random

a = []

for i in range(5):
    num = random.randint(1,100)
    a.append(num)

print("배열 a:",a)

count = 0
total = 0
print("배열 a에서 50보다 큰 수들:", end=" ")

for y in range(len(a)):
    if a[y]>50:
        print(a[y], end=" ")
        count += 1
        total += a[y]

print()
print("배열 a에서 50보다 큰 수들을 모두 합친 값:", total)
print("배열 a에서 50보다 큰 수들의 개수:", count)



