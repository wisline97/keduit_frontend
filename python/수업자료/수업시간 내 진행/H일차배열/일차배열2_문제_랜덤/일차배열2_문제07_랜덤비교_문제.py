'''
    [문제]
        [조건1] a, b 리스트 두 개에 1~100 사이의 랜덤 값 다섯 개를 저장한다.
        [조건2] base 변수에 랜덤으로 1~100 사이의 숫자를 저장한다. 
        base 변수값보다 큰 값들을 전부 출력하시오.
    [예시]
'''
import random

a = []
b = []

i = 1

base = random.randint(1,100)
print("베이스 숫자는",base)
while i <= 5:
    num1 = random.randint(1,100)
    num2 = random.randint(1,100)
    a.append(num1)
    b.append(num2)
    i += 1

print("a배열:",a, "b배열:",b)

y = 0

for y in range(len(a)):
    if a[y] > base:
        print("베이스 숫자보다 큰 a 배열 속 숫자:",a[y])
    if b[y] > base:
        print("베이스 숫자보다 큰 b 배열 속 숫자:",b[y])