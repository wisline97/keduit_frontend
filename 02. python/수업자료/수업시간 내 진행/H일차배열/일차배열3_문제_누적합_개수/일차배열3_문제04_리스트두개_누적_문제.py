'''
    [문제]
        a리스트와 b리스트에 랜덤 숫자(1~100)를 다섯 개씩 저장하고,
        a리스트의 전체 합과 b리스트의 전체 합 중 더 큰 값을 출력하시오.
        서로 같으면 둘 다 출력하시오.
    [예시]
        a = [93, 100, 41, 74, 45]
        b = [84, 80, 25, 19, 27]
        total1 = 353
        total2 = 235
        353
'''
import random

a = []
b = []

for i in range(5):
    num1 = random.randint(1,100)
    num2 = random.randint(1,100)
    a.append(num1)
    b.append(num2)

print("a =",a)
print("b =",b)

a_total = 0
b_total = 0

for y in range(len(a)):
    a_total += a[y]
    b_total += b[y]


if a_total > b_total:
    print("a_total =",a_total)

elif a_total < b_total:
    print("b_total =",b_total)

else:
    print("a_total =",a_total)
    print("b_total =",b_total)