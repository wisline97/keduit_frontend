'''
    [문제]
        [조건1] 리스트 두 개에 1~100 사이의 랜덤 값 다섯 개를 저장한다.
        [조건2] 둘 다 짝수이거나 "짝수" 출력, 둘 다 홀수이면 "홀수" 출력 , 
                한쪽은 홀수이고 다른 한쪽은 짝수이면 "다르다"를 출력하시오.
    [예시]
'''
import random

a = []
b = []

i = 1

while i <= 5:
    num1 = random.randint(1,100)
    num2 = random.randint(1,100)
    a.append(num1)
    b.append(num2)
    i += 1

print("a배열:",a, "b배열:",b)

y = 0

for y in range(len(a)):
    if a[y]%2 == 0 and b[y]%2 == 0 :
        print(a[y],b[y], "는 짝수")
    elif a[y]%2 == 1 and b[y]%2 == 1 :
        print(a[y],b[y], "는 홀수")
    else:
        print(a[y],b[y], "다르다")